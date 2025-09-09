import React, {useState} from "react";
import Studentdata from "./Studentdata";
const topics = [
  {id: 1, title: "Introduction To React"},
  {id: 2, title: "State And Events"},
  {id: 3, title: "Side Effects And Data"},
  {id: 4, title: "Final Project And Wrap-Up"},
  {id: 5, title: "Introduction To React"},
  {id: 6, title: "Introduction To React"},
  {id: 7, title: "Introduction To React"},
  {id: 8, title: "Introduction To React"},
  {id: 9, title: "Introduction To React"},
  {id: 10, title: "Introduction To React"},
];

const tableData = [
  {
    id: 1,
    name: "John Smith",
    score: "85%",
    status: "Completed",
    date: "2024-03-15",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    score: "92%",
    status: "Completed",
    date: "2024-03-14",
  },
  {
    id: 3,
    name: "Mike Davis",
    score: "78%",
    status: "In Progress",
    date: "2024-03-13",
  },
  {
    id: 4,
    name: "Emma Wilson",
    score: "95%",
    status: "Completed",
    date: "2024-03-12",
  },
  {
    id: 4,
    name: "Emma Wilson",
    score: "95%",
    status: "Completed",
    date: "2024-03-12",
  },
  {
    id: 5,
    name: "Tom Brown",
    score: "67%",
    status: "In Progress",
    date: "2024-03-11",
  },
];

const tabs = ["My Content", "Assessments (1)", "Leaderboard "];
const StudentTable = () => {
  const [activeTab, setActiveTab] = useState("My Content");
  return (
    <div>
      <div>
        <p className="text-xl font-semibold">Welcome, John Doe</p>
        <p className="text-sm text-gray-400">
          Manage your student assesment and activities smoothly
        </p>
      </div>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className=" border-b border-gray-200 mt-2.5">
          <div className="w-full px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4 gap-90">
              <div className="flex space-x-8">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-medium border-b-2 transition-colors ${
                      activeTab === tab
                        ? "text-gray-500"
                        : "text-gray-500 border-transparent hover:text-gray-700"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="flex items-center space-x-0.5 ">
                <span className="text-sm text-gray-500 font-medium  ">
                  {" "}
                  Class
                </span>
                <span className="text-sm font-medium text-gray-900 ">
                  |React Fundamentals
                </span>
              </div>
            </div>
            <div className="min-h-screen bg-gray-50 p-6">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Class Breakdown
                </h2>

                <div className="bg-white shadow-sm border border-gray-200 rounded-tr-4xl rounded-tl-4xl ">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 p-4 bg-gray-100 rounded-tr-4xl rounded-tl-4xl ">
                    <div className="col-span-1 text-sm font-medium text-gray-600">
                      S/N
                    </div>
                    <div className="col-span-8 text-sm font-medium text-gray-600">
                      Topic
                    </div>
                    <div className="col-span-3 text-sm font-medium text-gray-600 text-right">
                      Action
                    </div>
                  </div>
                  <Studentdata />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
