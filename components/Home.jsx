import Image from "next/image";

const Home = () => {
  return (
    <section className="flex items-center px-6 border-b border-1 border-gray-300">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        
        {/* LEFT: Text + App Store badges */}
        <div className="md:w-1/2 text-left ">
          <h1 className="text-5xl font-bold mb-4">
            Immersive Audio Made Simple
          </h1>
          <p className="text-xl text-gray-600 mb-6">
            Nothing breaks the flow of tabletop gaming like a clunky audio setup.
            Storytelling should feel effortless, not distracted by tech.
            Pocket Bard keeps you present, confident, and ready for the moments
            that matter most.
          </p>

          {/* App Store & Google Play badges */}
          <div className="flex gap-4 mt-4">
            <Image 
              src="/assets/images/Apple Store.png"
              alt="Download on Apple Store"
              width={140}
              height={40}
              priority
            />
            <Image 
              src="/assets/images/Google Play.png"
              alt="Download on Google Play"
              width={140}
              height={40}
              priority
            />
          </div>
        </div>

        {/* RIGHT: iPhone image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/assets/images/iPhonev2.png"
            alt="Pocket Bard on iPhone"
            width={600}
            height={1000}
            priority
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
