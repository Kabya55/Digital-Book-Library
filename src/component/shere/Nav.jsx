"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Nav = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  const userAvatar = user?.image;

  const router = useRouter();
  const pathname = usePathname();

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

  return (
    <div className="border-b px-2 bg-white sticky top-0 z-50">
      <nav className="flex justify-between items-center py-3 max-w-7xl mx-auto w-full">
        <Link href="/" className="flex gap-2 items-center">
          <Image src="/logo.png" alt="logo" width={30} height={30} priority />
          <h3 className="font-black text-lg">Digital Book Library</h3>
        </Link>

        <ul className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className={`${baseBtn} ${pathname === "/" ? activeBtn : ""}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/all-books"
              className={`${baseBtn} ${pathname === "/all-books" ? activeBtn : ""}`}
            >
              All Books
            </Link>
          </li>
          <li>
            <Link
              href="/profile"
              className={`${baseBtn} ${pathname === "/profile" ? activeBtn : ""}`}
            >
              Profile
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          {isPending ? (
            <span className="loading loading-spinner loading-md"></span>
          ) : user ? (
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-medium hidden md:block">
                Hello, {user.name}
              </h2>
              <Image
                src={userAvatar}
                alt="User profile"
                width={35}
                height={35}
                className="rounded-full border object-cover"
                unoptimized
              />
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-md bg-gray-200 hover:bg-red-500 hover:text-white transition-all text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2 text-sm">
              <Link
                href="/signup"
                className="px-3 py-1 rounded-md bg-gray-100 hover:bg-black hover:text-white transition"
              >
                SignUp
              </Link>
              <Link
                href="/login"
                className="px-3 py-1 rounded-md bg-slate-800 text-white hover:bg-black transition"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Nav;
