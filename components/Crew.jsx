"use client";

import React, { useState } from "react";

const people = [
  {
    name: "Zack",
    role: "Graphic Designer",
    image: "/assets/images/Zack.png",
    description: "Zack creates stunning designs and has a great eye for detail.",
  },
  {
    name: "Chase",
    role: "Job Title",
    image: "/assets/images/Chase.png",
    description: "Chase create stunning music and has a great ear for detail.",
  },
  {
    name: "Janette",
    role: "Job Title",
    image: "/assets/images/Janette.png",
    description: "Janette does amazing work and has a great eye for detail.",
  },
  {
    name: "Jason",
    role: "App Developer",
    image: "/assets/images/Jason.png",
    description: "Jason develops amazing apps and has a great eye for detail.",
  },
  {
    name: "Nick",
    role: "Job Title",
    image: "/assets/images/Nick.png",
    description: "Nick does amazing work and has a great eye for detail.",
  },
  // Add more people here
];

const Crew = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % people.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + people.length) % people.length);
  };

  const { name, role, image, description } = people[current];

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-amber-500/35 to-amber-700/60">
      <div className="flex max-w-4xl w-full bg-white rounded-lg overflow-hidden">
        {/* Left: Image */}
        <div className="w-1/2">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right: Text */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2">{name}</h2>
          <h3 className="text-2xl text-gray-600 mb-4">{role}</h3>
          <p className="text-gray-700">{description}</p>

          {/* Navigation */}
          <div className="mt-6 flex gap-4">
            <button
              onClick={prevSlide}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-amber-400"
            >
              Previous
            </button>
            <button
              onClick={nextSlide}
              className="px-4 py-2 bg-gray-200 rounded hover:bg-amber-400"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
            