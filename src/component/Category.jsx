"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Category = () => {
  const searchParams = useSearchParams();
  const [categories, setCategories] = useState([]);

  const activeCategory = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  useEffect(() => {
    fetch("https://digital-book-library-five.vercel.app/category.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const isAllActive = !activeCategory && !searchQuery;

  return (
    <div className="flex flex-col gap-2 p-2">
      <Link href="/all-books" className="text-sm">
        <button
          className={`w-full text-left px-5 py-3 rounded-md transition-colors font-medium ${
            isAllActive
              ? "bg-slate-800 text-white"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700"
          }`}
        >
          All
        </button>
      </Link>
      {categories.map((category) => {
        const isCurrentCategoryActive =
          activeCategory === category.name.toLowerCase() && !searchQuery;

        return (
          <Link
            key={category.id}
            href={`/all-books?category=${category.name.toLowerCase()}`}
            className="text-sm"
          >
            <button
              className={`w-full text-left px-5 py-3 rounded-md transition-colors font-medium ${
                isCurrentCategoryActive
                  ? "bg-slate-800 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700"
              }`}
            >
              {category.name}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Category;
