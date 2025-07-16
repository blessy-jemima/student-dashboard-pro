import React, { useState } from 'react';

const AddStudentForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [gpa, setGpa] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !gpa) return;

    const newStudent = {
      id: Date.now(),
      name,
      gpa: parseFloat(gpa),
    };
    onAdd(newStudent);
    setName('');
    setGpa('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-xl shadow-md mb-4">
      <h3 className="text-lg font-semibold mb-2">Add Student</h3>
      <div className="flex flex-col gap-2">
        <input
          type="text"
          placeholder="Name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="GPA"
          className="border p-2 rounded"
          value={gpa}
          onChange={(e) => setGpa(e.target.value)}
        />
        <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
          Add Student
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;
