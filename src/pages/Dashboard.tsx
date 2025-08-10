import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DashboardNav from "../components/DashboardNav";

const Dashboard: React.FC = () => {
    const location = useLocation();

    // Determine if this is tutor or student dashboard
    const isTutorDashboard = location.pathname.startsWith("/dashboard/t");
    const basePath = isTutorDashboard ? "/dashboard/t" : "/dashboard/s";
    const dashboardType = isTutorDashboard ? "Tutor" : "Student";

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-6">
                        {dashboardType} Dashboard
                    </h1>
                    <DashboardNav basePath={basePath} />
                    <div className="mt-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
