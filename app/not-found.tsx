import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-6xl font-extrabold text-gray-900 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6 text-center">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-md hover:bg-yellow-300 transition"
      >
        Go back home
      </Link>
    </div>
  );
}