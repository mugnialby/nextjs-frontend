import Link from "next/link";

export default function Home() {
    return (
        <>
            <Link
                className="text-yellow-600 hover:text-yellow-800"
                href="/login"
            >
                Login
            </Link>
        </>
    );
}
