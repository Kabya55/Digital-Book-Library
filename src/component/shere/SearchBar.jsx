"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const term = formData.get("searchTerm");

    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }

    replace(`?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="mb-8">
      <div className="flex gap-2">
        <input
          name="searchTerm"
          type="text"
          placeholder="Search..."
          className="flex-1 p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-slate-800 outline-none"
          defaultValue={searchParams.get("search")?.toString()}
        />
        <button
          type="submit"
          className="px-8 py-4 bg-slate-800 text-white rounded-lg font-bold hover:bg-slate-700 transition-colors"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
