import React from "react";

const Page = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-8 text-lg text-gray-800 bg-gradient-to-b from-purple-200 to-blue-200">
        <p className="mb-4">Hello there!</p>
        <p className="mb-4">
          We hope you've been enjoying your time exploring Kick, your ultimate
          destination for sneaker enthusiasts. Our mission is simple: to
          eliminate the hassle of scouring multiple resellers to find the
          perfect sneaker at the best price in your size. Because let's face it,
          the endless search can be quite frustrating, right?
        </p>
        <p className="mb-4">
          Thanks to the incredible support from our community, we're dedicated
          to continuously improving kicks to better serve you. Your satisfaction
          is our top priority, and we're committed to providing you with the
          best sneaker-buying (and selling) experience possible.
        </p>
        <p className="mb-4">
          Have feedback to share or interested in collaborating with us? We'd
          love to hear from you! Drop us an email at{" "}
          <a
            href="mailto:info@kick.com"
            className="text-blue-500 hover:underline"
          >
            info@kick.com
          </a>
          , and rest assured, each message will receive our personal attention
          and a timely response.
        </p>
        <p>Until then, keep stepping in style! 🚀</p>
        <p className="mt-4">
          Warm regards,
          <br />
          The kicks Team
        </p>
      </div>
    </>
  );
};

export default Page;
