export default function Login({ setIsAuth }) {
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => setIsAuth(true)}>Login</button>
    </div>
  );
}
