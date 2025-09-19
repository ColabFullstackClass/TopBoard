import React from "react";
import { SlPlus } from "react-icons/sl";
import StatsCard from "../../components/tutor/StatsCard";
import TableData from "../../components/tutor/TableData";

interface StudentsTableProps {
  students: {
    id: string;
    name: string;
    email: string;
    grade: string;
    status: string;
  }[];
}

const data = [
  {
    title: "REACT 101",
    des: "Class code",
  },
  {
    title: "47",
    des: " Number of Students",
  },
  {
    title: "89",
    des: "Classes Created",
  },
];

const tableData = [
  {
    num: 1,
    topic: "React Project",
  },
  {
    num: 2,
    topic: "React Project",
  },
  {
    num: 3,
    topic: "React Project",
  },
];

const StudentTab: React.FC<StudentsTableProps> = () => {
  return (
    <>
      <main className="flex w-full max-w-full mx-auto px-4">
        <section className="flex-1">
          <article className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            {data.map((item, index) => (
              <StatsCard key={index} title={item.title} des={item.des} />
            ))}
          </article>
          <article className="bg-white rounded-2xl p-6 ">
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-300">
              <p className="text-xl font-semibold">Class Breakdown</p>
              <span className="flex gap-4">
                <button className="flex items-center gap-2 text-sm py-2 px-4 border border-transparent rounded-full bg-[#2F80ED] text-white cursor-pointer hover:bg-blue-600">
                  <SlPlus size={16} />
                  Create New Activity
                </button>
              </span>
            </div>
            <div>
              <div className="bg-gray-200 px-5 py-3 rounded-tl-3xl rounded-tr-3xl">
                <table className="w-full">
                  <thead>
                    <tr className="text-gray-600">
                      <div>
                        <th>S/N</th>
                        <th className="pl-15">Topic</th>
                      </div>
                      <th className="text-right">Action</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="shadow-sm rounded-bl-3xl rounded-br-3xl pb-3.5">
                {tableData.map((item, index) => (
                  <TableData key={index} num={item.num} topic={item.topic} />
                ))}
              </div>
            </div>
          </article>
        </section>
        <section className="w-50 ml-20">
          <article className="space-y-6">
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold text-green-500 mb-2">87%</h2>
              <p className="text-gray-500">Average grade</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">0</h2>
              <p className="text-gray-500">Pending Submissions</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
              <h2 className="text-4xl font-bold mb-2">21</h2>
              <p className="text-gray-500">Active Students</p>
            </div>
            <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-center shadow-sm">
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
