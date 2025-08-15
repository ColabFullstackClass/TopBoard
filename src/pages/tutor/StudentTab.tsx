import React from "react";
import StudentsTable from "./StudentsTable";
import { SlPlus } from "react-icons/sl";
import { IoIosArrowDown } from "react-icons/io";

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
      <main className="flex gap-20">
        <section className="">
          <article className="flex justify-between my-5 gap-4">
            <div className="bg-gray-200 space-y-8 rounded-3xl w-96 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">React 101</h2>
              <p className="text-gray-500">Class code</p>
            </div>
            <div className="bg-gray-200 space-y-8 rounded-3xl w-96 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">{students.length}</h2>
              <p className="text-gray-500">Total Number of students</p>
            </div>
            <div className="bg-gray-200 space-y-8 rounded-3xl w-96 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">89</h2>
              <p className="text-gray-500">Class created</p>
            </div>
          </article>
          <article className="mt-14">
            <div className="flex justify-between items-baseline space-y-3 border-b border-gray-300">
              <p className="text-xl">Student List</p>
              <span className="flex gap-3">
                <button className="flex items-center gap-2 p-2 border border-gray-300 rounded-3xl cursor-pointer">
                  <SlPlus size={20} />
                  Add Student
                </button>
                <button className="flex items-center gap-2 p-2 border border-gray-300 rounded-3xl bg-blue-400 text-white cursor-pointer">
                  <SlPlus size={20} />
                  Create Assessment
                </button>
              </span>
            </div>
            <div className="mt-3">
              <StudentsTable students={[]} />
            </div>
          </article>
        </section>
        <section className="w-32 relative -top-8">
          <p className="flex items-center gap-8 w-48 text-gray-500 mb-6 text-right border-b border-gray-300 pb-2">
            Quick Stats <IoIosArrowDown />
          </p>
          <article className="space-y-4">
            <div className="bg-gray-200 space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold text-green-600">0%</h2>
              <p className="text-gray-500">Average Grade</p>
            </div>
            <div className="bg-gray-200 space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">0</h2>
              <p className="text-gray-500">Pending Submissions</p>
            </div>
            <div className="bg-gray-200 space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">0</h2>
              <p className="text-gray-500">Active Students</p>
            </div>
            <div className="bg-gray-200 space-y-8 rounded-3xl w-72 h-36 flex flex-col justify-center items-center">
              <h2 className="text-4xl font-bold">0</h2>
              <p className="text-gray-500">Total Assesments</p>
            </div>
          </article>
        </section>
      </main>
    </>
  );
};

export default StudentTab;
