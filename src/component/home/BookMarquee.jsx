"use client";

import React from "react";
import Marquee from "react-fast-marquee";

const books = [
  { _id: "1", title: "📚 New Arrival: Atomic Habits" },
  { _id: "2", title: "📖 The Alchemist now available" },
  { _id: "3", title: "🔥 Special Discount on Premium Memberships" },
  { _id: "4", title: "📘 Rich Dad Poor Dad added to library" },
];

const BookMarquee = () => {
  return (
    <>
      <div className="container mx-auto rounded-lg mt-5 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
        <div className="flex justify-between gap-4 items-center py-4 px-2  ">
          <button className="btn bg-red-500 text-white rounded-full whitespace-nowrap p-2">
            Latest Updates
          </button>
          <Marquee pauseOnHover={true} speed={100}>
            {books.map((n) => (
              <span key={n._id}>{n.title}</span>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default BookMarquee;
