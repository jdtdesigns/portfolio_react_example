import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getNames } from './utils';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [page, setPage] = useState('landing');
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
          setStudents={setStudents}
          showModal={showModal}
          setShowModal={setShowModal}
        />;
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

      <Modal showModal={showModal} />

      <Footer studentName={studentName} />
    </div>
  );
}

export default App;
