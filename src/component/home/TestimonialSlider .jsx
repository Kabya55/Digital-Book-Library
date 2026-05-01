"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const reviews = [
  { name: "Rahim", text: "Amazing platform! I found so many useful books." },
  { name: "Karim", text: "Very easy to borrow books. Loved the UI!" },
  { name: "Sadia", text: "Best digital library experience so far!" },
  {
    name: "Nusrat",
    text: "Super easy to use and very helpful for finding books quickly!",
  },
  {
    name: "Arif",
    text: "The collection is great and the borrowing system works perfectly.",
  },
  {
    name: "Tanvir",
    text: "Clean design and smooth experience. Really impressed!",
  },
];

const TestimonialSlider = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-16 py-16 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-2xl">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-white">
              What Users Say
            </h2>

            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500 }}
              spaceBetween={20}
              slidesPerView={1}
            >
              {reviews.map((rev, i) => (
                <SwiperSlide key={i}>
                  <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-lg text-center max-w-xl mx-auto">
                    <p className="text-gray-700 mb-4 text-lg">"{rev.text}"</p>

                    <h4 className="font-semibold text-gray-900">
                      — {rev.name}
                    </h4>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSlider;
