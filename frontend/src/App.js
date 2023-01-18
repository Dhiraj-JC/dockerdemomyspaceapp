import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:7000/students')
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div className='App'>
      <>
        {students.map((student) => (
          <>
            <h1>Student Name : {student.name}</h1>
            <h2>Student age : {student.age}</h2>
            <hr />
          </>
        ))}
      </>
    </div>
  );
}

export default App;
