import { useState, useEffect } from 'react';
import { getNames } from './utils';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('landing');
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const names = getNames();

    setStudents([...names]);
    console.log('use effect');
  }, []);

  const handlePageView = () => {

    switch (page) {
      case 'landing':
        return <Landing
          studentName={studentName}
          setStudentName={setStudentName}
          students={students}
          setStudents={setStudents} />;
      case 'about':
        return <About />;
      default:
        return <Contact />
    }
  }

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        page={page}
        setPage={setPage} />

      {handlePageView()}

      <Footer studentName={studentName} />
    </div>
  );
}

export default App;
