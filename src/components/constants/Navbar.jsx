"use client";
import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white p-5 xl:px-10 4xl:px-20 4xl:py-10 flex justify-between items-center fixed w-full z-50">
      <div className="flex items-center w-full xl:w-fit justify-between">
        <Image
          alt="Ash-Airah"
          src={"/logo.svg"}
          width={500}
          height={500}
          className="w-36 xl:w-48"
        />

        <HambergerMenu
          className="stroke-black xl:hidden"
          size={32}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>

      <nav className="hidden xl:flex">
        <ul className="flex gap-10 items-center">
          <li>
            <Link
              href={"#howto"}
              className="uppercase text-xl font-medium font-inter"
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              href={"#team"}
              className="uppercase text-xl font-medium font-inter"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="uppercase text-xl font-medium font-inter"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div
        className={`absolute top-16 left-0 w-full bg-white text-black transition-all duration-300 ${
          isOpen ? "h-40 opacity-100" : "h-0 opacity-0 pointer-events-none"
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center gap-5 py-5">
          <li>
            <Link
              href={"#howto"}
              className="uppercase text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              href={"#team"}
              className="uppercase text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={"#contact"}
              className="uppercase text-black text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
