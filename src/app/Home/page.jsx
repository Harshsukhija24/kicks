import React from "react";
import Women from "../Component/women";
import Jordan4 from "../Component/jordan4";
import Jordan1 from "../Component/jordan1";
import Home from "../Component/Home";
const page = () => {
  return (
    <div>
      <Home />

      <Jordan1 />
      <Jordan4 />
      <Women />
    </div>
  );
};

export default page;
