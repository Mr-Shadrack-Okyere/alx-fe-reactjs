import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const queryClient = new QueryClient();

// Data fetching component
function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    "posts",
    async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!res.ok) throw new Error("Failed to fetch");
      return res.json();
    },
    {
      staleTime: 60000, // 1 minute
      cacheTime: 300000 // 5 minutes
    }
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>
        {isFetching ? "Refreshing..." : "Refetch Posts"}
      </button>
      <ul>
        {data.slice(0, 5).map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Main App with QueryClientProvider inside
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{ padding: 20 }}>
        <h1>React Query Demo</h1>
        <PostsComponent />
      </div>
    </QueryClientProvider>
  );
}
