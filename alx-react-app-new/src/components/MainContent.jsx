function MainContent() {
  return (
    <main
      style={{
        padding: '20px',
        backgroundColor: '#eef2f3',
        minHeight: '200px'
      }}
    >
      <h2 style={{ color: '#333' }}>Welcome to My Page</h2>

      <p style={{ lineHeight: '1.6', fontSize: '16px' }}>
        This application displays user profile information and a list
        of favorite cities using React components.
      </p>
    </main>
  );
}

export default MainContent;
