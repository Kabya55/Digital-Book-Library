import Image from "next/image";
import Link from "next/link";

const BooksCard = ({ book }) => {
  return (
    <div className="border rounded-xl p-4 shadow hover:scale-105 transition">
      <Image
        src={book.image_url ? book.image_url : "/fallback.jpg"}
        alt={book.title}
        width={300}
        height={200}
        className="rounded-lg h-40 w-full object-cover"
      />

      <h2 className="font-semibold mt-3">{book.title}</h2>

      <p className="text-sm text-gray-500">{book.author}</p>

      <Link
        href={`/books/${book.id}`}
        className="inline-block mt-3 text-sm px-4 py-2 bg-black text-white rounded-full"
      >
        View Details
      </Link>
    </div>
  );
};

export default BooksCard;
