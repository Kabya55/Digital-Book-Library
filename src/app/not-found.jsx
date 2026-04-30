import Link from "next/link";
export const metadata = {
  title: "Page Not Found - 404 Error",
};

const ErrorPage = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
        <h1 className="text-6xl font-bold text-blue-600 animate-bounce">404</h1>

        <h2 className="text-2xl font-semibold mt-4 text-gray-700">
          Page Not Found
        </h2>

        <p className="text-gray-500 mt-2 max-w-md">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <Link href="/">
          <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Go Back Home
          </button>
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
