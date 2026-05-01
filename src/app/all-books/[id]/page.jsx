import BorrowButton from "@/component/BorrowButton";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Digital Book Library || Book Details",
  description: "Find and borrow your favorite books online",
};

const BookDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    "https://digital-book-library-five.vercel.app/data.json",
  );
  const books = await res.json();

  const book = books.find((item) => item.id == id);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <Image
            src={book?.image_url}
            alt={book?.title}
            width={400}
            height={650}
            className="rounded-lg shadow-2xl  w-full object-cover border"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-slate-900">{book?.title}</h1>
          <p className="text-2xl text-slate-600 font-medium">
            Author: {book?.author}
          </p>

          <div className="py-4 border-t border-b">
            <p className="text-lg text-gray-700 leading-relaxed">
              {book?.description}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-slate-800">
              Availability:
            </span>
            <span
              className={`text-lg font-bold ${book?.available_quantity > 0 ? "text-green-600" : "text-red-600"}`}
            >
              {book?.available_quantity} copies left
            </span>
          </div>

          {/* Action Button */}
          <BorrowButton book={book} />
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;
