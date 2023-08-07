import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getNames } from './utils';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';

// Page imports
import Landing from './pages/Landing';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const names = getNames();

    setStudents([...names]);
  }, []);

  return (
    <div className={`container ${darkMode ? 'dark' : ''}`}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode} />

      <Routes>
        <Route path="/" element={(
          <Landing
            setStudentName={setStudentName}
            studentName={studentName}
            setStudents={setStudents}
            students={students} />
        )} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer studentName={studentName} />
    </div>
  );
}

export default App;
