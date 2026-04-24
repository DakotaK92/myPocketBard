import Image from "next/image";

const storeLinks = {
  apple: "https://apps.apple.com/us/app/pocket-bard-app/id6444221555",
  google:
    "https://play.google.com/store/apps/details?id=com.MojoFilterMediaLLC.RPGSoundSystem",
};

const Home = () => {
  return (
    <section className="flex items-center px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full max-w-6xl mx-auto">
        
        {/* LEFT: Text + App Store badges */}
        <div className="md:w-1/2 text-left">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-amber-700">
            For tabletop storytellers
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Immersive Audio Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-6 leading-relaxed">
            Nothing breaks the flow of tabletop gaming like a clunky audio setup.
            Storytelling should feel effortless, not distracted by tech.
            Pocket Bard keeps you present, confident, and ready for the moments
            that matter most.
          </p>

          {/* App Store & Google Play badges */}
          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href={storeLinks.apple}
              target="_blank"
              rel="noreferrer"
              aria-label="Download Pocket Bard on the App Store"
              className="transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-4"
            >
              <Image
                src="/assets/images/Apple Store.png"
                alt="Download on the App Store"
                width={150}
                height={44}
                priority
              />
            </a>
            <a
              href={storeLinks.google}
              target="_blank"
              rel="noreferrer"
              aria-label="Get Pocket Bard on Google Play"
              className="transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-4"
            >
              <Image
                src="/assets/images/Google Play.png"
                alt="Get it on Google Play"
                width={150}
                height={44}
                priority
              />
            </a>
          </div>
        </div>

        {/* RIGHT: iPhone image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/assets/images/iPhonev2.png"
            alt="Pocket Bard on iPhone"
            width={560}
            height={560}
            priority
            className="w-full max-w-[500px] h-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Home;
