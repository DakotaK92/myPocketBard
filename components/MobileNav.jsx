"use client";

import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { IoMenu } from "react-icons/io5";

const links = [
  { name: "Features", path: "features" },
  { name: "Price", path: "price" },
  { name: "FAQs", path: "questions" },
];

const MobileNav = () => {
  const pathname = usePathname(); // will always be "/"

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button aria-label="Open menu">
          <IoMenu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-3/5 p-6">
        <a href="/" className="flex justify-center mb-8">
          <img src="/assets/logo.png" alt="myPocketBard logo" />
        </a>

        <nav className="flex flex-col gap-6 text-black">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.path}`}
              className="border-b pb-2"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
