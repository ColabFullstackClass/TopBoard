import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import StudentData from "../../Data/StudentData";


interface StudentsTableProps {
  students: {
    id: string;
    name: string;
    email: string;
    grade: string;
    status: string;
  }[];
}

const StudentsTable: React.FC<StudentsTableProps> = ({ students }) => {
  return (
    <table className="w-full text-left text-sm text-gray-700">
      <thead className="bg-gray-100 text-xs text-gray-500 uppercase">
        <tr>
          <th scope="col" className="px-6 py-3">Student ID</th>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Email</th>
          <th scope="col" className="px-6 py-3">Grade</th>
          <th scope="col" className="px-6 py-3">Submission Status</th>
          <th scope="col" className="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        {students.length === 0 ? (
          <tr>
            <td colSpan={6} className="text-center py-6">
              No students yet
            </td>
          </tr>
        ) : (
          students.map((student, index) => (
            <tr key={index} className="border-b border-gray-100">
              <td className="px-6 py-4">{student.id}</td>
              <td className="px-6 py-4">{student.name}</td>
              <td className="px-6 py-4">{student.email}</td>
              <td className="px-6 py-4 text-green-500 font-semibold">{student.grade}</td>
              <td className="px-6 py-4">{student.status}</td>
              <td className="px-6 py-4">
                <button className="text-gray-500 hover:text-gray-700">
                  <BsThreeDotsVertical />
                </button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default StudentsTable;
