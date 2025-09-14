import React, { useState } from "react";
import MyClasses from "../../components/Dashboard/student/MyClasses";
import HeaderSection from "../../components/Dashboard/student/HeaderSection";
import QuickStats from "../../components/Dashboard/student/QuickStats";
import RecentGradesDropdown from "../../components/Dashboard/student/RecentGradesDropdown";

const StudentHome: React.FC = () => {
    const [activeTab, setActiveTab] = useState("My Classes");
    return (
        <div className="flex flex-col lg:flex-row w-full h-full p-6 gap-6 bg-[#ffff]">
            <div className="flex-1 space-y-6">
                <HeaderSection
                    changeActiveTab={setActiveTab}
                    activeTab={activeTab}
                />
                {activeTab === "My Classes" && <MyClasses />}
            </div>
            <div className="w-full lg:w-64 space-y-4">
                <QuickStats />
                <RecentGradesDropdown />
            </div>
        </div>
    );
};

export default StudentHome;
