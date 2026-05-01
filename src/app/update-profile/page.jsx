"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

const UpdateProfilePage = () => {
  const router = useRouter();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedUser = Object.fromEntries(formData.entries());

    await authClient.updateUser({
      image: updatedUser.photo,
      name: updatedUser.name,
    });

    // 👉 update শেষ হলে redirect
    router.push("/profile");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-[400px] rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Update Profile
        </h2>

        <Form className="flex flex-col gap-4" onSubmit={handleUpdate}>
          <TextField isRequired name="name">
            <Label>Your Name</Label>
            <Input placeholder="Enter your name" />
            <FieldError />
          </TextField>

          <TextField name="photo">
            <Label>Photo URL</Label>
            <Input placeholder="Enter photo URL" />
            <FieldError />
          </TextField>

          {/* ❌ Link remove করা হয়েছে */}
          <Button
            type="submit"
            className="mt-2 w-full bg-black text-white hover:bg-gray-800"
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default UpdateProfilePage;
