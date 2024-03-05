"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
const page = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const router = useRouter();
  const [error, SetError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    SetError("");
    try {
      const respone = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      console.log(respone);
      if (respone?.error) {
        SetError("invaild");
        console.log(error);
        return;
      }
      router.push("/Home");
    } catch (error) {
      console.log("error:", error);
      SetError("an unexpected error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>welcome to kicks</h1>
        <input
          id="email"
          placeholder="email@xyz.com"
          type="text"
          onChange={(e) => SetEmail(e.target.value)}
        />
        <input
          id="password"
          placeholder="*****"
          type="text"
          onChange={(e) => SetPassword(e.target.value)}
        />
        <button type="submit">login</button>
        {error && <div>{error}</div>}
        <p>
          new to kicks
          <Link href="/Register">Register</Link>
        </p>
      </form>
    </div>
  );
};

export default page;
