"use client";

import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";

const UpdateProfilePage = () => {
  const handleUpdate = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const updatedUser = Object.fromEntries(formData.entries());

    console.log(updatedUser);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-[400px] rounded-lg bg-white p-8 shadow-md">
          {/* Title */}
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Register your account
          </h2>

          <Form className="flex flex-col gap-4" onSubmit={handleUpdate}>
            {/* Name */}
            <TextField isRequired name="name">
              <Label>Your Name</Label>
              <Input placeholder="Enter your name" />
              <FieldError />
            </TextField>

            {/* Photo URL */}
            <TextField name="photo">
              <Label>Photo URL</Label>
              <Input placeholder="Enter photo URL" />
              <FieldError />
            </TextField>

            {/* Button */}
            <Link href="/profile">
              <Button
                type="submit"
                className="mt-2 w-full bg-black text-white hover:bg-gray-800"
              >
                Save
              </Button>
            </Link>
          </Form>
        </div>
      </div>
    </>
  );
};

export default UpdateProfilePage;
