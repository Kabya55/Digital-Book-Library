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
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 shadow-md">
        <h2 className="mb-6 text-center text-2xl font-semibold">
          Login your account
        </h2>

        <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="email" type="email">
            <Label>Email address</Label>
            <Input placeholder="Enter your email address" />
            <FieldError />
          </TextField>

          <TextField isRequired name="password">
            <Label>Password</Label>

            <InputGroup>
              <InputGroup.Input
                name="password"
                type={isVisible ? "text" : "password"}
                placeholder="Enter password"
              />

              <InputGroup.Suffix>
                <Button
                  isIconOnly
                  type="button"
                  onPress={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? <Eye /> : <EyeSlash />}
                </Button>
              </InputGroup.Suffix>
            </InputGroup>

            <FieldError />
          </TextField>

          <Button type="submit" className="w-full bg-black text-white">
            Login
          </Button>

          <p className="text-center text-sm">
            Don't have account? <Link href="/signup">Register</Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
