import React from "react";
import Nav from "../Component/Nav";
import Footer from "../Component/Footer";

const Page = () => {
  return (
    <>
    <Nav/>
    <div className="max-w-3xl mx-auto px-4 py-8 text-lg text-gray-800 bg-gray-100">
      <p className="text-xl font-bold mb-4">Nike's Sneaker History</p>
      <p className="mb-4">
        Nike's sneaker history is marked by innovation, iconic designs, and cultural influence. Here's a brief overview:
      </p>
      <p className="mb-4">
        Waffle Trainer (1974): Designed by Nike co-founder Bill Bowerman, the Waffle Trainer featured a unique waffle-like sole pattern, providing improved traction for runners. This shoe laid the foundation for Nike's future innovations in footwear technology.
      </p>
      <p className="mb-4">
        Nike Cortez (1972): Introduced as Nike's first self-designed shoe, the Cortez quickly became a classic. Its sleek silhouette and comfortable design made it popular not only for running but also as a casual lifestyle sneaker.
      </p>
      <p className="mb-4">
        Air Force 1 (1982): The Air Force 1 was the first basketball shoe to feature Nike's revolutionary Air cushioning technology. Originally designed for basketball players, it gained widespread popularity in urban communities and remains a cultural icon to this day.
      </p>
      <p className="mb-4">
        Air Jordan 1 (1985): The collaboration between Nike and basketball legend Michael Jordan gave birth to the Air Jordan 1, which shattered the mold of traditional basketball shoes with its bold design and innovative use of colors. The Air Jordan line became one of the most successful and influential sneaker franchises in history.
      </p>
      <p className="mb-4">
        Air Max Series (1987): The Air Max 1, designed by Tinker Hatfield, introduced visible Air cushioning to the world. Its iconic window in the sole showcased Nike's innovative technology, revolutionizing sneaker design and setting the stage for future Air Max models.
      </p>
      <p className="mb-4">
        Nike Dunk (1985): Originally released as a basketball shoe, the Nike Dunk gained popularity in the skateboarding community due to its durable construction and versatile design. It later became a staple in sneaker culture, especially with its numerous collaborations and limited releases.
      </p>
      <p className="mb-4">
        Nike SB (2002): Nike launched its Skateboarding division (Nike SB), which produced sneakers tailored specifically for skateboarders. The Nike SB Dunk quickly became a favorite among skaters and sneaker enthusiasts alike, thanks to its unique colorways and collaborations.
      </p>
      <p className="mb-4">
        Nike Flyknit (2012): Nike introduced Flyknit technology, a revolutionary method of engineering lightweight, formfitting uppers for sneakers. This innovation not only enhanced performance but also reduced waste in the manufacturing process, reflecting Nike's commitment to sustainability.
      </p>
      <p className="mb-4">
        Nike React (2017): Nike React foam cushioning debuted in running shoes, offering a combination of responsiveness, cushioning, and durability. The technology quickly expanded into other categories, including basketball and lifestyle sneakers.
      </p>
      <p className="mb-4">
        Throughout its history, Nike has consistently pushed the boundaries of sneaker design and technology, leaving an indelible mark on both sports and popular culture. From performance-driven innovations to iconic collaborations, Nike's sneakers continue to inspire and captivate sneaker enthusiasts worldwide.
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Page;
