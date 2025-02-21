import Container from "@/components/constants/Container";
import { Body } from "@/components/constants/textComponents/Body";
import { Heading } from "@/components/constants/textComponents/Heading";
import Image from "next/image";
import React from "react";

const OurMission = () => {
  return (
    <Container>
      <div className="flex flex-wrap 2xl:flex-nowrap gap-7 items-center">
        <div className="flex flex-col gap-2 max-w-screen-md">
          <h6 className="font-inter font-semibold uppercase text-body xl:text-mdbody 4xl:text-lgbody 6xl:text-xlbody text-[#212529]">
            Our Mission
          </h6>
          <Heading className={"text-[#1E1749] max-w-screen-sxm"}>
            Simplifying Cancer Care with AIRAH
          </Heading>
          <Body className="mt-7 text-[#525560]">
            AIRAH is your dedicated companion in cancer care, designed to
            simplify every step of your journey. We break down complex
            information, help you track symptoms, and provide early alerts on
            potential side effects.
          </Body>
          <Body className="text-[#525560] mt-4">
            With insights tailored to your health profile, AIRAH is here to
            empower you to feel prepared, reduce stress, and strengthen
            communication with your care team-making your journey easier and
            giving you and your loved ones peace of mind.
          </Body>
        </div>
        <div className="w-full">
          <Image
            width={500}
            height={500}
            src="/Banner/banner.png"
            alt="Ask Airah Banner"
            className="w-full h-[32rem] rounded-3xl object-cover object-center"
          />
        </div>
      </div>
    </Container>
  );
};

export default OurMission;
