import React from 'react';

const StudentList = ({ students }) => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Student Performance</h2>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">GPA</th>
            <th className="p-2 border">Rank</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={student.id} className="hover:bg-gray-50">
              <td className="p-2 border">{student.name}</td>
              <td className="p-2 border">{student.gpa}</td>
              <td className="p-2 border">{index + 1}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
