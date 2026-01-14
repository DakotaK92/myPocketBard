import React from "react";

const InfoSection = () => {
  return (
    <section className=" bg-orange-300">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center"></h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <img
              className="w-full"
              src="/assets/features/features1.gif"
              alt="Feature 1"
            />
            <p className="mt-2 text-center"></p>
          </div>
          <div className="flex-1">
            <img
              className="w-full"
              src="/assets/features/features2.gif"
            />
            <p className="mt-2 text-center"></p>
          </div>
          <div className="flex-1">
            <img
              className="w-full"
              src="/assets/features/features3.gif"
            />
            <p className="mt-2 text-center"></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
