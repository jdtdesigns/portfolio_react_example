import { useState } from 'react';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('landing');
  const [count, setCount] = useState(0);

  const handlePageView = () => {

    switch (page) {
      case 'landing':
        return <Landing />;
      case 'about':
        return <About />;
      default:
        return <Contact />
    }
  }

  return (
    <>
      <Header count={count} page={page} setPage={setPage} />

      {handlePageView()}

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Footer count={count} />
    </>
  );
}

export default App;
