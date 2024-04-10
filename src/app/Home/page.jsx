import React from "react";
import Women from "../Component/women";
import Jordan4 from "../Component/jordan4";
import Jordan1 from "../Component/jordan1";
import Home from "../Component/Home";
import New from "../Component/new";
const page = () => {
  return (
    <div>
      <Home />
      <New />
      <Jordan1 />
      <Jordan4 />
      <Women />
    </div>
  );
};

export default page;
