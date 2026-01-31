import React from "react";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <p>Search for GitHub users and view their profiles.</p>
    </div>
  );
}

export default App;

import Search from "./components/Search";

function App() {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>GitHub User Search</h1>
      <Search />
    </div>
  );
}

export default App;

import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">GitHub Advanced User Search</h1>
      <Search />
    </div>
  );
}

export default App;
