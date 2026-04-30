"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowButton = ({ book }) => {
  const router = useRouter();

  const handleBorrow = () => {
    const user = null;

    if (!user) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    toast.success("Book borrowed successfully!");
  };

  return (
    <button
      onClick={handleBorrow}
      className={`px-6 py-3 rounded text-white ${
        book.available_quantity > 0
          ? "bg-black hover:bg-gray-800"
          : "bg-gray-400"
      }`}
    >
      {book.available_quantity > 0 ? "Borrow This Book" : "Out of Stock"}
    </button>
  );
};

export default BorrowButton;
