import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex space-x-8">
                        <Link
                            to="/"
                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                isActive('/') 
                                    ? 'border-indigo-500 text-gray-900' 
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/register"
                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                isActive('/register') 
                                    ? 'border-indigo-500 text-gray-900' 
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                            }`}
                        >
                            Register
                        </Link>
                        <Link
                            to="/dashboard/t"
                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                location.pathname.startsWith('/dashboard/t') 
                                    ? 'border-indigo-500 text-gray-900' 
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                            }`}
                        >
                            Tutor Dashboard
                        </Link>
                        <Link
                            to="/dashboard/s"
                            className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                                location.pathname.startsWith('/dashboard/s') 
                                    ? 'border-indigo-500 text-gray-900' 
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                            }`}
                        >
                            Student Dashboard
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 