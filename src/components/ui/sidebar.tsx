"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
    const router = useRouter();

    const [dropdownVisibility, setDropdownVisibility] = useState({
        segments: false,
        account: false,
        setting: false,
    });

    const toggleDropdown = (menuName: string) => {
        setDropdownVisibility((prevVisibility) => ({
            ...prevVisibility,
            [menuName]: !prevVisibility[menuName],
        }));
    };

    const handleDashboards = () => {
        // Implement your logout logic here (e.g., clear cookies, tokens)
        console.log("Dashboard");
        router.push("/dashboard");
    };

    const handleHome = () => {
        // Implement your logout logic here (e.g., clear cookies, tokens)
        console.log("Home");
        router.push("/home");
    };

    return (
        <aside className="bg-white w-64 p-4 flex flex-col space-y-2 transition-all duration-300 ease-in-out">
            <nav className="flex flex-col space-y-2">
                <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                    onClick={handleHome}
                >
                    <span>Home</span>
                </a>
                <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                    onClick={handleDashboards}
                >
                    <span>Dashboards</span>
                </a>
                <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleDropdown("segments")}
                >
                    <span>Segments</span>
                    <span className="ml-auto">&gt;</span>
                </a>
                <div
                    className={`transition-all duration-300 ease-in-out transform ${
                        dropdownVisibility.segments
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-[-10px] pointer-events-none"
                    }`}
                >
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.segments ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Option 1
                    </a>
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.segments ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Option 2
                    </a>
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.segments ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Option 3
                    </a>
                </div>
                <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleDropdown("account")}
                >
                    <span>Account</span>
                    <span className="ml-auto">&gt;</span>
                </a>
                <div
                    className={`transition-all duration-300 ease-in-out transform ${
                        dropdownVisibility.account
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-[-10px] pointer-events-none"
                    }`}
                >
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.account ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Setting Option 1
                    </a>
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.account ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Setting Option 2
                    </a>
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.account ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Setting Option 3
                    </a>
                </div>
                <a
                    href="#"
                    className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleDropdown("setting")}
                >
                    <span>Settings</span>
                    <span className="ml-auto">&gt;</span>
                </a>
                <div
                    className={`transition-all duration-300 ease-in-out transform ${
                        dropdownVisibility.setting
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-[-10px] pointer-events-none"
                    }`}
                >
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.setting ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Setting Option 1
                    </a>
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.setting ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Setting Option 2
                    </a>
                    <a
                        href="#"
                        className={`${
                            dropdownVisibility.setting ? `block` : `hidden`
                        } p-2 hover:bg-gray-100`}
                    >
                        Setting Option 3
                    </a>
                </div>
            </nav>
        </aside>
    );
}
