"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const res = await fetch(
  "https://digital-book-library-five.vercel.app/upcoming.json",
  { cache: "no-store" },
);
const data = await res.json();

const UpcomingBooks = () => {
  return (
    <>
      <div className="container mx-auto mt-16 px-4">
        <h2 className="text-2xl font-bold mb-6">Upcoming Books</h2>

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500 }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {data.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="p-4 bg-white dark:bg-zinc-900 rounded-2xl shadow hover:scale-105 transition text-center">
                <Image
                  src={book.image}
                  alt={book.title}
                  width={200}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg mb-3"
                />

                <h3 className="font-semibold">{book.title}</h3>
                <p className="text-sm text-gray-500">{book.date}</p>

                <button className="mt-3 px-4 py-1 text-sm bg-black text-white rounded-full">
                  Coming Soon
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default UpcomingBooks;
