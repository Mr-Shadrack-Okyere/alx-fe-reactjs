import WelcomeMessage from './components/WelcomeMessage';

function App() {
  return (
    <div>
      <WelcomeMessage />
    </div>
  );
}

export default App;

import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />
    </div>
  );
}

export default App;
