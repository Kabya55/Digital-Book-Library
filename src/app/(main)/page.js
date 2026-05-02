import Banner from "@/component/home/Banner";
import BookMarquee from "@/component/home/BookMarquee";
import FeaturedBooks from "@/component/home/FeaturedBooks";
import TestimonialSlider from "@/component/home/TestimonialSlider ";
import UpcomingBooks from "@/component/home/UpcomingBooks";

export const metadata = {
  title: "Digital Book Library",
  description: "Find and borrow your favorite books online",
};

export default function Home() {
  return (
    <>
      <Banner />
      <BookMarquee />
      <FeaturedBooks />
      <UpcomingBooks />
      <TestimonialSlider />
    </>
  );
}
