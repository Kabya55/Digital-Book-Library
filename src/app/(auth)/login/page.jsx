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
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";

function LoginForm() {
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: callbackUrl,
    });

    if (error) {
      alert(error.message);
    }

    if (data) {
      alert("Login successful");
    }
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-lg bg-white p-8 shadow-md">
          <h2 className="mb-6 text-center text-2xl font-semibold">
            Login your account
          </h2>

          <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
              <Label>Email address</Label>
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

            {/* Button */}
            <Button
              type="submit"
              className="mt-2 w-full bg-black text-white hover:bg-gray-800"
            >
              Login
            </Button>

            {/* Register */}
            <p className="mt-2 text-center text-sm text-gray-500">
              Don't Have An Account ?{" "}
              <Link href="/signup" className="text-red-500 hover:underline">
                Register
              </Link>
            </p>
          </Form>
        </div>
      </div>
    </>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
