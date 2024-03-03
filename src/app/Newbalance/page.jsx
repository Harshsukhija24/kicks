import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

const Page = () => {
  return (
    <>
    <Nav/>
    <div className="max-w-3xl mx-auto px-4 py-8 text-lg text-gray-800 bg-gray-100">
      <p className="text-xl font-bold mb-4">New Balance History</p>
      <p className="mb-4">
        New Balance has a rich history in the sneaker world, originating in the early 20th century when it was founded in Boston, Massachusetts, in 1906 by William J. Riley. Initially, the company specialized in orthopedic footwear, focusing on arch supports and specialty shoes to provide enhanced comfort and support.
      </p>
      <p className="mb-4">
        In the 1960s, New Balance expanded its product line to include athletic footwear, catering to runners with a commitment to quality craftsmanship and innovative design. One of its early successes was the Trackster, introduced in 1960, which became the world's first running shoe with a ripple sole.
      </p>
      <p className="mb-4">
        Throughout the following decades, New Balance solidified its reputation for producing high-performance sneakers tailored to the needs of athletes. The brand's dedication to research and development led to the introduction of technologies such as the Encap cushioning system and the Rollbar stability feature.
      </p>
      <p className="mb-4">
        New Balance sneakers gained widespread recognition for their superior comfort, durability, and versatility, appealing to runners, walkers, and everyday wearers alike. The iconic New Balance 990 series, launched in 1982, exemplifies the brand's commitment to quality and innovation.
      </p>
      <p className="mb-4">
        In recent years, New Balance has continued to innovate and evolve, embracing sustainable practices and expanding its range of lifestyle and performance footwear. Collaborations with designers, celebrities, and artists have further elevated the brand's profile, ensuring its enduring relevance in the sneaker industry.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
