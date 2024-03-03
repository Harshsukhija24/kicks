"use client";

import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    SetError("");
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
