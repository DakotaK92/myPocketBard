import { FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="px-6 py-8">
      {/* Top row: logo, links, socials */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto">
        
        {/* Left: logo + info + links */}
        <div className="flex items-center mb-6 md:mb-0">
          <img
            src="/assets/images/lute.png"
            alt="Pocket Bard logo"
            className="w-12 h-auto"
          />
          <div className="ml-4">
            <p className="text-xl text-black">Pocket Bard</p>
            <p className="text-sm text-gray-600 mb-3">
              Immersive audio made simple
            </p>

            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#features" className="hover:text-amber-500 transition-colors">
                Features
              </a>
              <a href="#price" className="hover:text-amber-500 transition-colors">
                Pricing
              </a>
              <a href="#questions" className="hover:text-amber-500 transition-colors">
                FAQs
              </a>
            </div>
          </div>
        </div>

        {/* Right: Social icons */}
        <div className="flex items-center gap-4">
          <a
            href="https://discord.gg/pocket-bard"
            aria-label="Discord"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-gray-600 hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-110"
          >
            <FaDiscord className="text-lg" />
          </a>
          <a
            href="https://www.instagram.com/pocket_bard/"
            aria-label="Instagram"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-gray-600 hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-110"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://www.tiktok.com/@pocketbardapp"
            aria-label="TikTok"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-gray-600 hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-110"
          >
            <FaTiktok className="text-lg" />
          </a>
          <a
            href="https://www.youtube.com/@pocketbard"
            aria-label="YouTube"
            className="inline-flex items-center justify-center w-10 h-10 border-2 border-gray-300 rounded-full text-gray-600 hover:border-amber-500 hover:text-amber-500 transition-all hover:scale-110"
          >
            <FaYoutube className="text-lg" />
          </a>
        </div>
      </div>

      {/* Bottom row: centered copyright */}
      <div className="w-full text-center mt-6 text-sm text-gray-500">
        &copy; 2026 Pocket Bard. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
