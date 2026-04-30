import BooksCard from "../shere/BooksCard";

const FeaturedBooks = async () => {
  const res = await fetch(
    "https://digital-book-library-five.vercel.app/data.json",
    { cache: "no-store" },
  );
  const data = await res.json();
  const topBooks = data.slice(0, 4);
  return (
    <>
      <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mt-3">Top Generations</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
          {topBooks.map((book) => (
            <BooksCard key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturedBooks;
