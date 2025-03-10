"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
    const router = useRouter()
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState<string | null>(null);

    const onSignIn = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            router.push('/dashboard'); // Redirect to /dashboard
            // const res = await fetch("/api/login", {
            //     method: "POST",
            //     body: JSON.stringify({
            //         userId,
            //         password,
            //     }),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // });

            // if (res.ok) {
            //     console.log("masok");
            //     // signIn();
            // } else {
            //     setError((await res.json()).error);
            // }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-slate-100">
            <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12">
                <form
                    onSubmit={onSignIn}
                    className="space-y-5 w-full sm:w-[400px]"
                >
                    <h1 className="font-semibold text-2xl">Login</h1>
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="user-id">User ID</label>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-400"
                            required
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            id="user-id"
                            type="text"
                        />
                    </div>
                    <div className="grid w-full items-center gap-1.5">
                        <label htmlFor="password">Password</label>
                        <input
                            className="px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-yellow-400"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="password"
                            type="password"
                        />
                    </div>
                    {/* <div className="grid w-full items-center gap-1.5">{error}</div> */}
                    <div className="flex items-center justify-between">
                        <button
                            type="submit"
                            className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
                        >
                            Log In
                        </button>
                        <a
                            href="#"
                            className="inline-block align-baseline font-bold text-sm text-yellow-600 hover:text-yellow-800"
                        >
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <Link
                    className="text-yellow-600 hover:text-yellow-800"
                    href="/register"
                >
                    Create account
                </Link>{" "}
            </div>
        </div>
    );
}
