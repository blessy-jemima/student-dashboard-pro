import React, { useState } from 'react';
import StudentList from './components/StudentList';
import AddStudentForm from './components/AddStudentForm';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Alice', gpa: 8.6 },
    { id: 2, name: 'Bob', gpa: 9.2 },
    { id: 3, name: 'Charlie', gpa: 7.8 }
  ]);

  const handleAddStudent = (student) => {
    const updated = [...students, student].sort((a, b) => b.gpa - a.gpa);
    setStudents(updated);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10">
      <AddStudentForm onAdd={handleAddStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
