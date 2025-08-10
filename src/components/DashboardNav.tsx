import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface DashboardNavProps {
    basePath: string;
}

const DashboardNav: React.FC<DashboardNavProps> = ({ basePath }) => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path || location.pathname === `${basePath}/${path}`;
    };

    const navItems = [
        { path: '', label: 'Home' },
        { path: 'home', label: 'Home' },
        { path: 'my-classes', label: 'My Classes' },
        { path: 'assessments', label: 'Assessments' },
    ];

    return (
        <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex space-x-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            to={`${basePath}/${item.path}`}
                            className={`py-4 px-1 border-b-2 font-medium text-sm ${
                                isActive(item.path)
                                    ? 'border-indigo-500 text-indigo-600'
                                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default DashboardNav; 