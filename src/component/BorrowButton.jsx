"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const BorrowButton = ({ book }) => {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const handleBorrow = () => {
    if (isPending) {
      toast.info("Checking login...");
      return;
    }

    if (!user) {
      toast.error("Please login first!");
      router.push("/login");
      return;
    }

    if (book.available_quantity === 0) {
      toast.error("Book is out of stock!");
      return;
    }

    toast.success("Book borrowed successfully!");
  };

  return (
    <button
      onClick={handleBorrow}
      disabled={book.available_quantity === 0}
      className={`px-6 py-3 rounded text-white ${
        book.available_quantity > 0
          ? "bg-black hover:bg-gray-800"
          : "bg-gray-400 cursor-not-allowed"
      }`}
    >
      {book.available_quantity > 0 ? "Borrow This Book" : "Out of Stock"}
    </button>
  );
};

export default BorrowButton;
