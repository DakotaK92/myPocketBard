"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { IoMenu } from "react-icons/io5";

const links = [
  { name: "Features", path: "features" },
  { name: "Price", path: "price" },
  { name: "FAQs", path: "questions" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-transparent transition-colors hover:border-gray-300"
        >
          <IoMenu size={24} />
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-4/5 p-6 sm:w-80">
        <SheetTitle className="sr-only">Mobile navigation</SheetTitle>
        <SheetClose asChild>
          <Link href="/#home" className="flex justify-center mb-8">
            <Image
              src="/assets/logo.png"
              alt="myPocketBard logo"
              width={96}
              height={96}
              className="h-24 w-24 object-contain"
            />
          </Link>
        </SheetClose>

        <nav className="flex flex-col gap-6 text-black">
          {links.map((link) => (
            <SheetClose key={link.name} asChild>
              <a href={`#${link.path}`} className="border-b pb-2">
                {link.name}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
