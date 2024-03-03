"use client";

import { useState } from "react";

const page = () => {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [error, SetError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    SetError("");
  };
  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          id="name"
          placeholder="Name"
          type="text"
          onChange={(e) => SetName(e.target.value)}
        />
        <input
          id="email"
          placeholder="Email@xyz.com"
          onChange={e.target.value}
        />
        <input id="password" placeholder="*****" onChange={e.target.value} />
        <button type="submit">Register</button>
        {error<div>{error}</div>}

        <p>already have account!
        <Link href="/Login">Login to account</Link>
        </p>
      </form>
    </div>
  );
};

export default page;
