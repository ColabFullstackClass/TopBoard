import React from "react";

const Home: React.FC = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        Welcome to TopBoard
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Hello World - Your learning management platform
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;
