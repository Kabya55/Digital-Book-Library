"use client";

import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Nav = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userAvatar = user?.image;

  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const baseBtn =
    "px-3 py-1 rounded-md border border-gray-300 text-gray-700 transition-all duration-200 hover:bg-black hover:text-white hover:border-black";

  const activeBtn = "bg-black text-white border-black";

  const handleLogout = async () => {
    try {
      const res = await authClient.signOut();
      if (res) {
        router.push("/");
        router.refresh();
      }
    } catch (err) {
      toast.error("Logout Error:", err);
    }
  };

  const navLinks = (
    <>
      <Link
        href="/"
        className={`${baseBtn} ${pathname === "/" ? activeBtn : ""}`}
        onClick={() => setOpen(false)}
      >
        Home
      </Link>

      <Link
        href="/all-books"
        className={`${baseBtn} ${pathname === "/all-books" ? activeBtn : ""}`}
        onClick={() => setOpen(false)}
      >
        All Books
      </Link>

      <Link
        href="/profile"
        className={`${baseBtn} ${pathname === "/profile" ? activeBtn : ""}`}
        onClick={() => setOpen(false)}
      >
        Profile
      </Link>
    </>
  );

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 container mx-auto w-full">
        {/* Logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={30} height={30} priority />
          <h3 className="font-black text-lg">Digital Book Library</h3>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-2 text-sm">
          {navLinks}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {isPending ? (
            <Spinner size="md" color="danger" />
          ) : user ? (
            <div className="hidden md:flex items-center gap-3">
              <h2 className="text-sm font-medium">Hello, {user.name}</h2>

              {userAvatar ? (
                <Image
                  src={userAvatar}
                  alt="User profile"
                  width={35}
                  height={35}
                  className="rounded-full border object-cover"
                  referrerPolicy="no-referrer"
                  unoptimized
                />
              ) : (
                <div className="w-[35px] h-[35px] rounded-full bg-gray-800 text-white flex items-center justify-center text-sm font-semibold">
                  {user?.name?.charAt(0).toUpperCase()}
                </div>
              )}

              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-red-500 text-white hover:bg-red-700 hover:text-white transition-all text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="hidden md:flex gap-2 text-sm">
              <Link
                href="/signup"
                className={`${baseBtn} ${pathname === "/signup" ? activeBtn : ""}`}
              >
                SignUp
              </Link>

              <Link
                href="/login"
                className={`${baseBtn} ${pathname === "/login" ? activeBtn : ""}`}
              >
                Login
              </Link>
            </div>
          )}

          {/* Mobile Button */}
          <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-3 px-4 pb-4">
          {navLinks}

          {user ? (
            <button onClick={handleLogout} className="px-3 py-2 rounded-md ">
              Logout
            </button>
          ) : (
            <>
              <Link href="/signup" className={baseBtn}>
                SignUp
              </Link>
              <Link href="/login" className={baseBtn}>
                Login
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Nav;
