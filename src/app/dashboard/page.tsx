"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Dashboard() {
    const router = useRouter();
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        // Implement your logout logic here (e.g., clear cookies, tokens)
        console.log("Logging out...");
        router.push("/login"); // Redirect to login page
    };

    return (
        <>
            <nav
                className={`pl-4 pr-2 pt-3 pb-3 flex justify-between items-center border-b-amber-700 ${
                    isDarkMode ? "bg-gray-600" : "bg-gray-200"
                }`}
            >
                <button onClick={toggleSidebar} className="focus:outline-none">
                    <svg
                        className="h-6 w-6"
                        fill="fill"
                        stroke={`${isDarkMode ? "#e5e7eb" : "#4a5565"}`}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        ></path>
                    </svg>
                </button>
                <div className="flex items-center">
                    <input
                        id="switch-link"
                        type="checkbox"
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        className="appearance-none relative inline-block rounded-full w-12 h-6 cursor-pointer before:inline-block before:absolute before:top-0 before:left-0 before:w-full before:h-full before:rounded-full before:bg-stone-200 before:transition-colors before:duration-200 before:ease-in after:absolute after:top-2/4 after:left-0 after:-translate-y-2/4 after:w-6 after:h-6 after:border after:border-stone-200 after:bg-white after:rounded-full checked:after:translate-x-full after:transition-all after:duration-200 after:ease-in disabled:opacity-50 disabled:cursor-not-allowed dark:after:bg-white checked:before:bg-stone-800 checked:after:border-stone-800"
                    />
                </div>
            </nav>

            <div className="flex">
                <aside
                    className={`w-60 min-h-screen p-3 flex flex-col ${
                        isDarkMode ? "bg-gray-600" : "bg-gray-200"
                    } ${isSidebarOpen ? "block" : "hidden"}`}
                >
                    <h2
                        className={`text-lg font-semibold mb-4 ${
                            isDarkMode ? "text-gray-200" : "text-gray-600"
                        }`}
                    >
                        Admin Panel
                    </h2>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                className={`block p-2 rounded-md  ${
                                    isDarkMode
                                        ? "text-gray-200 hover:bg-gray-200 hover:text-gray-600"
                                        : "text-gray-600 hover:bg-gray-600 hover:text-gray-200"
                                }`}
                            >
                                Dashboard
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className={`block p-2 rounded-md  ${
                                    isDarkMode
                                        ? "text-gray-200 hover:bg-gray-200 hover:text-gray-600"
                                        : "text-gray-600 hover:bg-gray-600 hover:text-gray-200"
                                }`}
                            >
                                Users
                            </a>
                        </li>
                        <li className="mb-2">
                            <a
                                href="#"
                                className={`block p-2 rounded-md  ${
                                    isDarkMode
                                        ? "text-gray-200 hover:bg-gray-200 hover:text-gray-600"
                                        : "text-gray-600 hover:bg-gray-600 hover:text-gray-200"
                                }`}
                            >
                                Settings
                            </a>
                        </li>
                        <li className="mb-2 relative">
                            <button
                                onClick={toggleDropdown}
                                className={`flex justify-between w-full p-2 rounded ${
                                    isDarkMode
                                        ? "text-gray-200 hover:bg-gray-200 hover:text-gray-600"
                                        : "text-gray-600 hover:bg-gray-600 hover:text-gray-200"
                                }`}
                            >
                                Dropdown
                            </button>
                            {isDropdownOpen && (
                                <ul className="absolute mt-1 w-full bg-gray-100 rounded shadow-md">
                                    <li className="p-2 hover:bg-gray-200 text-gray-700">
                                        <a href="#">Profile</a>
                                    </li>
                                    <li className="p-2 hover:bg-gray-200 text-gray-700">
                                        <a href="#">Preferences</a>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </ul>
                    <ul>
                        <li className="mb-2">
                            <a
                                href="#"
                                onClick={handleLogout}
                                className={`block p-2 rounded-md ${
                                    isDarkMode
                                        ? "text-gray-200 hover:bg-gray-200 hover:text-gray-600"
                                        : "text-gray-600 hover:bg-gray-600 hover:text-gray-200"
                                }`}
                            >
                                Logout
                            </a>
                        </li>
                    </ul>
                </aside>

                <main className={`flex-1 p-4`}>
                    <h1 className="text-2xl font-semibold mb-4">
                        Welcome to the Dashboard
                    </h1>
                    <p>This is your main dashboard content.</p>
                </main>
            </div>
        </>
    );
}
