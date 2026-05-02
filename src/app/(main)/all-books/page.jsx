import Category from "@/component/Category";
import BooksCard from "@/component/shere/BooksCard";
import SearchBar from "@/component/shere/SearchBar";

export const metadata = {
  title: "Digital Book Library || All Books",
  description: "Find and borrow your favorite books online",
};
const AllBooksPage = async ({ searchParams }) => {
  const { category, search } = await searchParams;

  const res = await fetch(
    "https://digital-book-library-five.vercel.app/data.json",
    { cache: "no-store" },
  );
  const books = await res.json();
  const filteredBooks = books.filter((book) => {
    const matchesCategory = category
      ? book.category.toLowerCase() === category.toLowerCase()
      : true;

    const matchesSearch = search
      ? book.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto mt-6 px-4">
      <h1 className="text-3xl font-bold mb-6">All Books</h1>
      <SearchBar />

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-3">
          <h2 className="text-xl font-bold mb-4">All Category</h2>
          <Category />
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredBooks.length > 0 ? (
              filteredBooks.map((book) => (
                <BooksCard key={book.id} book={book} />
              ))
            ) : (
              <p className="col-span-3 text-center text-gray-500 py-10">
                No books found matching your criteria.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBooksPage;
