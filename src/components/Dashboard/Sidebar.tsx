import { Home, BookOpen, FileText, LogOut } from "lucide-react";

export default function Sidebar() {
    return (
        <div className="h-screen w-full bg-gray-900 text-gray-200 flex flex-col rounded-br-4xl">
            {/* Logo */}
            <div className="flex items-center gap-2 p-4 border-b border-gray-800">
                <img src="/img/logo.png" alt="Logo" className="w-6 h-6" />
                <span className="font-semibold text-lg">TopBoard</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col mt-4 gap-1 space-y-6">
                <div className="flex items-center gap-2 bg-white text-gray-900 rounded-l-full px-4 py-2">
                    <Home size={18} />
                    <span>Home</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-l-full">
                    <BookOpen size={18} />
                    <span>My Classes</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800 rounded-l-full">
                    <FileText size={18} />
                    <span>Assessments</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 mt-auto hover:bg-gray-800 rounded-l-full">
                    <LogOut size={18} />
                    <span>Log Out</span>
                </div>
            </nav>
        </div>
    );
}
