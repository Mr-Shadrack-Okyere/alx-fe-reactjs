import { useQuery } from "react-query";

const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
};

export default function PostsComponent() {
  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
    isFetching
  } = useQuery("posts", fetchPosts, {
    staleTime: 1000 * 60, // 1 minute cache freshness
    cacheTime: 1000 * 60 * 5 // stays in cache 5 minutes
  });

  if (isLoading) return <p>Loading posts...</p>;

  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>

      <button onClick={refetch} disabled={isFetching}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id} style={{ marginBottom: "10px" }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
