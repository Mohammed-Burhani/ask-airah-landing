import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-white p-5 xl:px-10 4xl:px-20 4xl:py-10 flex justify-between items-center fixed w-full z-50">
      <Image
        alt="Ash-Airah"
        src={"/logo.svg"}
        width={500}
        height={500}
        className="w-48"
      />

      <nav>
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
