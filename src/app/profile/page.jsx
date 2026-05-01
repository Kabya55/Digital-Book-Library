"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl font-semibold">Please login to view profile</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        {/* Header */}
        <div className="flex items-center gap-6">
          <Image
            src={user.image || "/default-avatar.png"}
            alt="User Avatar"
            width={100}
            height={100}
            className="rounded-full object-cover border"
            unoptimized
          />

          <div>
            <h2 className="text-2xl font-bold">{user.name}</h2>
            <p className="text-gray-500">{user.email}</p>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Email Address</p>
            <p className="font-semibold">{user.email}</p>
          </div>

          <div className="p-4 border rounded-lg">
            <p className="text-sm text-gray-500">Account Type</p>
            <p className="font-semibold">Standard User</p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-6 flex gap-3">
          <Link href="/update-profile">
            <button className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-black transition">
              Edit Profile
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
