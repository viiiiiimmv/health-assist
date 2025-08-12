import {Link} from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="w-64 bg-[#F9FAFB] border-r border-gray-200 flex flex-col">
            {/* Profile Section */}
            <div className="p-4 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#14B8A6] flex items-center justify-center text-white font-bold">
                        H
                    </div>
                    <div>
                        <p className="font-semibold text-[#111827]">John Doe</p>
                        <p className="text-sm text-gray-500">View Profile</p>
                    </div>
                </div>
            </div>

            {/* Chat History */}
            <div className="flex-1 overflow-y-auto p-4">
                <p className="text-sm text-gray-500 mb-2">Chat History</p>
                <ul className="space-y-2">
                    <li className="p-2 rounded-lg bg-[#CCFBF1] cursor-pointer hover:bg-[#14B8A6] hover:text-white transition">
                        Health Tips
                    </li>
                    <li className="p-2 rounded-lg cursor-pointer hover:bg-[#CCFBF1] transition">
                        Nutrition Bot
                    </li>
                    <li className="p-2 rounded-lg cursor-pointer hover:bg-[#CCFBF1] transition">
                        Mental Wellness
                    </li>
                </ul>
            </div>

            {/* Settings */}
            <div className="p-4 border-t border-gray-200">
                <Link
                    to="/settings"
                    className="block w-full p-2 rounded-lg bg-[#14B8A6] text-white text-center hover:bg-[#0d9488] transition"
                >
                    Settings
                </Link>
            </div>
        </div>
    );
}
