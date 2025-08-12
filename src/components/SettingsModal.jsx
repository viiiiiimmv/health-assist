import { useState } from "react";
import Navbar from "../components/Navbar.jsx";

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("profile");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [darkMode, setDarkMode] = useState(false);
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="min-h-screen bg-[#F9FAFB]">
            <Navbar />

            <main className="max-w-3xl mx-auto p-6">
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-2xl font-semibold text-[#111827]">Settings</h1>
                    </div>

                    {/* Tabs */}
                    <div className="flex space-x-6 border-b border-gray-200 pb-4 mb-6">
                        <button
                            onClick={() => setActiveTab("profile")}
                            className={`pb-1 border-b-2 ${activeTab === "profile"
                                ? "border-[#14B8A6] text-[#14B8A6] font-medium"
                                : "border-transparent text-gray-500 hover:text-[#14B8A6]"
                            }`}
                        >
                            Profile
                        </button>

                        <button
                            onClick={() => setActiveTab("settings")}
                            className={`pb-1 border-b-2 ${activeTab === "settings"
                                ? "border-[#14B8A6] text-[#14B8A6] font-medium"
                                : "border-transparent text-gray-500 hover:text-[#14B8A6]"
                            }`}
                        >
                            Settings
                        </button>
                    </div>

                    {/* Profile Tab */}
                    {activeTab === "profile" && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-[#111827]">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-[#111827]">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="you@example.com"
                                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg bg-[#F9FAFB] focus:outline-none focus:ring-2 focus:ring-[#14B8A6]"
                                />
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => console.log("save profile", { name, email })}
                                    className="px-4 py-2 rounded-full bg-[#14B8A6] text-white hover:bg-[#0d9488] transition"
                                >
                                    Save Profile
                                </button>

                                <button
                                    onClick={() => { setName(""); setEmail(""); }}
                                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#111827] hover:bg-[#F9FAFB]"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Settings Tab */}
                    {activeTab === "settings" && (
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-[#111827]">Dark mode</p>
                                    <p className="text-xs text-gray-500">Toggle app theme</p>
                                </div>

                                <button
                                    onClick={() => setDarkMode((s) => !s)}
                                    aria-pressed={darkMode}
                                    className={`w-14 h-7 flex items-center p-1 rounded-full transition ${darkMode ? "bg-[#14B8A6] justify-end" : "bg-gray-200 justify-start"}`}
                                >
                                    <span className="bg-white w-5 h-5 rounded-full shadow" />
                                </button>
                            </div>

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-[#111827]">Notifications</p>
                                    <p className="text-xs text-gray-500">Enable push notifications</p>
                                </div>

                                <button
                                    onClick={() => setNotifications((s) => !s)}
                                    aria-pressed={notifications}
                                    className={`w-14 h-7 flex items-center p-1 rounded-full transition ${notifications ? "bg-[#14B8A6] justify-end" : "bg-gray-200 justify-start"}`}
                                >
                                    <span className="bg-white w-5 h-5 rounded-full shadow" />
                                </button>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={() => console.log("save settings", { darkMode, notifications })}
                                    className="px-4 py-2 rounded-full bg-[#14B8A6] text-white hover:bg-[#0d9488] transition"
                                >
                                    Save Settings
                                </button>

                                <button
                                    onClick={() => { setDarkMode(false); setNotifications(true); }}
                                    className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#111827]"
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
