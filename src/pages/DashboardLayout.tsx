import React from "react";
import { Outlet } from "react-router-dom";
// import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/Dashboard/Navbar";
const DashboardLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex">
            <div className="w-[10%]">
                <Sidebar />
            </div>

            <div className="w-full ">
                <Navbar />
                <div className="py-6 sm:px-6 lg:px-8">
                    {/* <DashboardNav basePath={basePath} /> */}
                    <div className="mt-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
