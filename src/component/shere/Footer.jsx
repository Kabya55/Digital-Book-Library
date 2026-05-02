"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className="relative mt-24">
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

        {/* Glow */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 " />

        <div className="container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.png"
                  alt="pixgen logo"
                  width={32}
                  height={32}
                  className="dark:brightness-200"
                />
                <h2 className="text-xl font-semibold text-black dark:text-white">
                  Digital Book Library
                </h2>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                Your digital library for discovering and borrowing books online.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-black dark:text-white">
                Product
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/all-books">All Books</Link>
                </li>
                <li>Pricing</li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-black dark:text-white">
                Company
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>About</li>
                <li>Contact</li>
                <li>Terms</li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-semibold mb-4 text-black dark:text-white">
                Contact Us
              </h3>
              <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
                <li>Email: kabyakishor017@gmail.com</li>
                <li>Phone: +8801750084574</li>
                <li>Location: Dhaka, Bangladesh</li>
              </ul>
            </div>

            {/* Social + CTA */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-black dark:text-white">
                Follow Us
              </h3>

              <div className="flex gap-4 text-gray-600 dark:text-gray-400 text-lg">
                <Link href="https://web.facebook.com/kabya55">
                  <FaFacebook />
                </Link>
                <Link href="https://www.linkedin.com/in/kabya-kishor-halder/">
                  <FaLinkedin />
                </Link>
                <Link href="https://www.instagram.com/kabyakishor017">
                  <FaInstagram />
                </Link>
                <Link href="https://github.com/Kabya55">
                  <FaGithub />
                </Link>
              </div>

              <Link
                href="/signup"
                className="inline-flex mt-4 items-center justify-center px-5 py-2.5 rounded-full 
              bg-black text-white dark:bg-white dark:text-black 
              text-sm font-medium hover:scale-[1.05] transition"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-gray-400">
            <p>
              © {new Date().getFullYear()} Digital Book Library. All rights
              reserved.
            </p>

            <div className="flex gap-6">Privacy Terms</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
