import Container from "@/components/constants/Container";
import { Body } from "@/components/constants/textComponents/Body";
import { Heading } from "@/components/constants/textComponents/Heading";
import Image from "next/image";
import React from "react";

const HowTo = () => {
  return (
    <Container className={"!overflow-hidden"}>
      <div className="w-full flex flex-wrap gap-10 2xl:flex-nowrap items-center">
        <div className="relative">
          <Image
            alt="Ask Airah How To"
            width={500}
            height={500}
            src={"/Banner/sections/how-to/banner.png"}
            className="w-full h-80"
          />
          <div className="absolute -bottom-10 -right-10 xl:-bottom-20 xl:-right-20 bg-white p-6">
            <Image
              alt="Ask Airah How To"
              width={500}
              height={500}
              src={"/Banner/sections/how-to/outer.png"}
              className="w-40 h-40 xl:w-52 xl:h-52"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-screen-sm mt-16 xl:mt-0 xl:ml-32">
          <Heading
            className={
              "text-[#1E1749] max-w-screen-sxm text-center xl:text-start"
            }
          >
            Here's how it works.
          </Heading>
          <Body className="text-[#525560] text-center xl:text-start">
            Learn how AIRAH provides you with personalized support, guiding you
            step-by-step with tailored recommendations and real-time assistance.
            We’re here to make each choice feel simpler, giving you the
            confidence to make informed decisions about your care.
          </Body>
        </div>
      </div>
    </Container>
  );
};

export default HowTo;
