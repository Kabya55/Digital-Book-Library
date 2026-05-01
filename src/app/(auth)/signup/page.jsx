"use client";

import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import { Eye, EyeSlash } from "@gravity-ui/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: userData.name,
      email: userData.email,
      password: userData.password,
      image: userData.photo,
      callbackURL: "/",
    });

    if (error) {
      console.log(error);
      alert(error.message || "Signup failed");
      return;
    }

    if (data) {
      console.log("SUCCESS:", data);
      router.push("/");
      router.refresh();
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="w-[400px] rounded-lg bg-white p-8 shadow-md">
          {/* Title */}
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Register your account
          </h2>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
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

            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label>Email</Label>
              <Input placeholder="Enter your email address" />
              <FieldError />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Password must contain at least one uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Password must contain at least one number";
                }
                return null;
              }}
            >
              <Label>Password</Label>

              <InputGroup>
                <InputGroup.Input
                  name="password"
                  placeholder="Enter your password"
                  type={isVisible ? "text" : "password"}
                />

                <InputGroup.Suffix>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="ghost"
                    type="button"
                    onPress={() => setIsVisible(!isVisible)}
                  >
                    {isVisible ? <Eye /> : <EyeSlash />}
                  </Button>
                </InputGroup.Suffix>
              </InputGroup>

              <Description>
                Must be at least 8 characters with 1 uppercase and 1 number
              </Description>

              <FieldError />
            </TextField>

            {/* Checkbox */}
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" required />
              Accept Term & Conditions
            </label>

            {/* Button */}
            <Button
              type="submit"
              className="mt-2 w-full bg-black text-white hover:bg-gray-800"
            >
              Register
            </Button>

            {/* Login link */}
            <p className="mt-2 text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
