import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto mt-4">
        <section className="text-center py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Next Read
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Discover thousands of books and start borrowing instantly
          </p>

          <Link
            href="/all-books"
            className="px-6 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full hover:scale-105 transition"
          >
            Browse Now
          </Link>
        </section>
      </div>
    </>
  );
};

export default Banner;
