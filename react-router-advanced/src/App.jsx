import { BrowserRouter, Routes, Route, Navigate, Link, Outlet, useParams } from "react-router-dom";
import { useState } from "react";

// Protected route component
function ProtectedRoute({ isAuth, children }) {
  if (!isAuth) return <Navigate to="/login" />;
  return children;
}

// Pages
function Home() { return <h2>Home Page</h2>; }
function Login({ setIsAuth }) { return <button onClick={() => setIsAuth(true)}>Login</button>; }
function Profile() {
  return (
    <div>
      <h2>Profile</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet />
    </div>
  );
}
function ProfileDetails() { return <p>Profile Details</p>; }
function ProfileSettings() { return <p>Profile Settings</p>; }
function Post() {
  const { id } = useParams();
  return <p>Post ID: {id}</p>;
}

// Main App
export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/posts/1">Post 1</Link> |{" "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        {/* Protected route */}
        <Route path="/profile" element={<ProtectedRoute isAuth={isAuth}><Profile /></ProtectedRoute>}>
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        {/* Dynamic route */}
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </BrowserRouter>
  );
}

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./components/Profile";          // nested routes inside Profile.jsx
import BlogPost from "./pages/BlogPost";            // dynamic route
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        {/* Protected route */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic route checker expects /blog/:id */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
