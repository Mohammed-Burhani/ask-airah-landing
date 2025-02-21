import { HambergerMenu } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
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

        <HambergerMenu className="stroke-black xl:hidden" size={32} />
      </div>

      <nav className="hidden xl:flex">
        <ul className="flex gap-10 items-center">
          <li>
            <Link
              href={""}
              className="uppercase text-xl font-medium font-inter"
            >
              What we do
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="uppercase text-xl font-medium font-inter"
            >
              Team
            </Link>
          </li>
          <li>
            <Link
              href={""}
              className="uppercase text-xl font-medium font-inter"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
