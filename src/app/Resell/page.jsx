import React from "react";
import Nav from "../Component/Nav";

const Page = () => {
  return (
    <>
    <Nav/>
    <div className="max-w-3xl mx-auto px-4 py-8 text-lg text-gray-800   from-purple-200 to-blue-200  bg-gray-100"> {/* Apply bg-gray-100 for a light background color */}
      <p className="text-3xl font-bold mb-4">Become a Reseller on Kick!</p>
      <p className="mb-4"> 
        Are you passionate about sneakers and looking to expand your business?
        Joining Kick as a reseller could be the perfect opportunity for you.
        Here's why:
      </p>
      <ul className="list-disc ml-8 mb-4">
        <li>Tap into a Growing Community: Kick boasts a vibrant community of sneaker enthusiasts who are eager to discover new styles and brands. By becoming a reseller on Kick, you'll have access to this engaged audience, helping you reach more potential customers.</li>
        <li>Boost Your Visibility: Showcase your products to a larger audience and increase your brand's visibility. With Kick's platform, your sneakers will be seen by users actively searching for the latest styles and releases.</li>
        <li>Collaboration Opportunities: At Kick, we believe in the power of collaboration. As a reseller, you'll have the chance to collaborate with other brands, participate in exclusive events, and unlock new opportunities to grow your business.</li>
        <li>Dedicated Support: Our team is here to support you every step of the way. Whether you have questions about listing your products or need assistance with customer inquiries, we're committed to helping you succeed on Kick.</li>
      </ul>
      <p className="mb-4">
        Ready to take your sneaker business to the next level? Join us as a reseller on Kick and become part of our thriving community.
      </p>
      <p className="mb-4">
        Reach out to us at <a href="mailto:reseller@kick.com" className="text-blue-500 hover:underline">reseller@kick.com</a> to learn more about how you can get started.
      </p>
      <p>
        Let's kickstart this journey together!
      </p>
      <p className="mt-4">
        Warm regards,
        <br />
        The Kick Team
      </p>
    </div>
    </>
  );
};

export default Page;
