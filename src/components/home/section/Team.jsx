import { PrimaryButton } from "@/components/constants/Blocks/PrimaryButton";
import Container from "@/components/constants/Container";
import { Body } from "@/components/constants/textComponents/Body";
import { Heading } from "@/components/constants/textComponents/Heading";
import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <div className="flex flex-wrap xl:flex-nowrap flex-col-reverse xl:flex-row items-center gap-7 mt-10" id="team">
      <div className="w-full">
        <Image
          src={"/Banner/team.png"}
          width={500}
          height={500}
          alt={"Aira Team"}
          className="w-full object-cover h-[28rem] "
        />
      </div>

      <Container className="flex flex-col items-center xl:items-start gap-7">
        <Heading className="text-[#1E1749] text-center xl:text-start">Meet the Airah team</Heading>
        <Body className={"text-center xl:text-start"}>
          Behind AIRAH is a team of compassionate experts dedicated to
          transforming cancer care. We’re committed to supporting you with
          knowledge, technology, and a heartfelt understanding of your journey.
          Meet the people who are here to help you every step of the way.
        </Body>
        <PrimaryButton title="Meet the team" className="!w-fit !px-10" />
      </Container>
    </div>
  );
};

export default Team;
