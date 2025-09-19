import React from "react";
import { useState } from "react";
import StudentTab from "../../components/dasboard/StudentTab";
import { VscSettings } from "react-icons/vsc";
import StudentData from "../../Data/StudentData";
import MyClassesHomePage from "./MyClassesHomePage";
// import { AddStudentModal } from "./AddStudentModal";

type TabType = "tab0" | "tab1" | "tab2" | "tab3";

const TutorMyClasses: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tab1");
  // const isClicked  = false

  const tabClasses = (tab: TabType) =>
    `px-4 py-2 text-sm transition-colors ${
      activeTab === tab
        ? "text-blue-500 border-b-2 border-b-blue-500"
        : "text-gray-800 hover:text-blue-400"
    }`;

  return (
    <div className="w-full">
      {/* uncomment to show original page content */}
      {/* <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          My Classes
        </h2>
        <p className="text-gray-600">Hello World - Manage your classes here</p>
      </div> */}

      <div className="mt-8">
        <div className="relative mb-6">
          {/* Tabs */}
          <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-6">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab("tab0")}
                className={tabClasses("tab0")}
              >
                Home
              </button>
              <button
                onClick={() => setActiveTab("tab1")}
                className={tabClasses("tab1")}
              >
                Students
              </button>
              <button
                onClick={() => setActiveTab("tab2")}
                className={tabClasses("tab2")}
              >
                Assesments
              </button>
              <button
                onClick={() => setActiveTab("tab3")}
                className={tabClasses("tab3")}
              >
                Leaderboard
              </button>
            </div>

            {activeTab === "tab1" ||
              (activeTab === "tab0" && (
                <div className="flex items-center gap-20">
                  <div className="flex items-center">
                    <span className="text-gray-500 text-sm">class ||</span>
                    <span className="ml-1 text-sm text-gray-800 font-medium">
                      React Fundamentals
                    </span>
                  </div>
                  <div className="flex items-center gap-15 text-gray-500">
                    <span className="text-sm">Quick Stats</span>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M19 9L12 16L5 9"
                        stroke="#9CA3AF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>

                    {/* <button className="text-sm text-gray-500">
                      <img src="/Vector.png" alt="Quick Stats Icon" />
                    </button> */}
                  </div>
                </div>
              ))}

            {activeTab === "tab2" && (
              <div className="flex gap-4 items-center">
                <button className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900">
                  <VscSettings className="text-lg" />
                  Filter
                </button>
                <button className="bg-[#029BD9] text-white text-sm py-1.5 px-4 rounded-3xl hover:bg-blue-600 transition-colors">
                  Create New Assessment
                </button>
              </div>
            )}
          </div>

          {/* Tab Content */}
          <div className="">
            {activeTab === "tab0" && (
              <div>
                <MyClassesHomePage students={[]} />
              </div>
            )}
            {activeTab === "tab1" && (
              <div>
                <StudentTab students={StudentData} />
              </div>
            )}
            {activeTab === "tab2" && (
              <section>{/* <TutorAssessments assessments={[]} /> */}</section>
            )}
            {activeTab === "tab3" && (
              <section>This is content for Tab 3.</section>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorMyClasses;
