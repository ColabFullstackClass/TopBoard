import React from "react";
import { Outlet } from "react-router-dom";
// import DashboardNav from "../components/DashboardNav";
import Sidebar from "../components/Dashboard/Sidebar";
import Navbar from "../components/dashboard/Navbar";

const DashboardLayout: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex justify-start">
            <div className="w-[15dvw]">
                <Sidebar />
            </div>

            <div className="w-[100dvw] ">
                <Navbar />
                <div className="py-6 sm:px-6 lg:px-8">
                    {/* <DashboardNav basePath={basePath} /> */}
                    <div className="mt-6 px-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
