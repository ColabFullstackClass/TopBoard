import React from "react";
import StudentsTable from "./StudentsTable";
import { SlPlus } from "react-icons/sl";


interface StudentsTableProps {
  students: {
    id: string;
    name: string;
    email: string;
    grade: string;
    status: string;
  }[];
}


const StudentTab: React.FC<StudentsTableProps> = ({ students }) => {
  return (
    <>
      <main className="flex gap-8 w-full max-w-full mx-auto px-4">
        <section className="flex-1">
          <article className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">REACT 101</h2>
              <p className="text-gray-500">Class code</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">{students.length}</h2>
              <p className="text-gray-500">Total Number of students</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">89</h2>
              <p className="text-gray-500">Class Created</p>
            </div>
          </article>
          <article className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-300">
              <p className="text-xl font-semibold">Student List</p>
              <span className="flex gap-4">
                <button className="flex items-center gap-2 text-sm py-2 px-4 border border-gray-300 rounded-full cursor-pointer hover:bg-gray-100">
                  <SlPlus size={16} />
                  Add Student
                </button>
                <button className="flex items-center gap-2 text-sm py-2 px-4 border border-transparent rounded-full bg-[#2F80ED] text-white cursor-pointer hover:bg-blue-600">
                  <SlPlus size={16} />
                  Create Assessment
                </button>
              </span>
            </div>
            <div>
              <StudentsTable students={students} />
            </div>
          </article>
        </section>
        <section className="w-80 pr-15">
          <article className="space-y-6">
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold text-green-500 mb-2">87%</h2>
              <p className="text-gray-500">Average grade</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">0</h2>
              <p className="text-gray-500">Pending Submissions</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">21</h2>
              <p className="text-gray-500">Active Students</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-4 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">12</h2>
              <p className="text-gray-500">Total Assessment</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default StudentTab;
