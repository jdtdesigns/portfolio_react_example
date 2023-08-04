import { useState } from 'react';

function Landing() {
  // const students = ['Erin', 'Hernan', 'Liam', 'Jonathan'];
  const [studentName, setStudentName] = useState('');
  const [students, setStudents] = useState(['Erin', 'Hernan', 'Liam', 'Jonathan']);

  const handleNameInput = (event) => {
    setStudentName(event.target.value);
  }

  const addStudent = () => {
    setStudents([...students, studentName]);
    setStudentName('');
  }

  return (
    <main>
      <h1>Landing</h1>
      <p>Welcome to our React Starter Site</p>

      <h3>Student List:</h3>
      {students.map((student, i) => (
        <p key={i}>{student}</p>
      ))}

      <input onChange={handleNameInput} value={studentName} type="text" placeholder="Type student name" />
      <button onClick={addStudent}>Add Student</button>
    </main>
  )
}

export default Landing;

// btn.addEventListener('click', function() {
//   const input = document.querySelector('#name-input');

//   students.push(input.value);

//   // Output the new student to the DOM
// })
