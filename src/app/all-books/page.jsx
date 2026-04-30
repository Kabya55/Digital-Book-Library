import BooksCard from "@/component/shere/BooksCard";
import React from "react";

const AllBooksPage = async () => {
  const res = await fetch(
    "https://programming-hero-13-sltu.vercel.app/data.json",
    { cache: "no-store" },
  );
  const books = await res.json();
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-6 p-4">
        <div className="col-span-12 md:col-span-3">
          <h2 className="text-xl font-bold mb-4">All Category</h2>
        </div>

        <div className="col-span-12 md:col-span-9">
          <div className="grid grid-cols-3 gap-3">
            {books.map((book) => (
              <BooksCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllBooksPage;
