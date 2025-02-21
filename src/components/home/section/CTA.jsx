import { GradientButton } from "@/components/constants/Blocks/GradientButton";
import Container from "@/components/constants/Container";
import { Body } from "@/components/constants/textComponents/Body";
import { Heading } from "@/components/constants/textComponents/Heading";
import Image from "next/image";
import React from "react";

const CTA = () => {
  return (
    <Container className={"!pb-0 !overflow-hidden"}>
      <Container
        className={
          "relative bg-[#B8D7F9]/50 rounded-tl-[4rem] xl:rounded-tl-[7rem] !pb-10 rounded-xl xl:rounded-3xl flex flex-col justify-center items-center gap-7"
        }
      >
        <Image
          width={500}
          height={500}
          src="/Objects/cta1.svg"
          alt="cta decoration"
          className="w-52 h-64 absolute top-0 right-0 opacity-15"
        />
        <Image
          width={500}
          height={500}
          src="/Objects/cta2.svg"
          alt="cta decoration"
          className="w-96 h-60 absolute bottom-0 left-0 opacity-15"
        />
        <Image
          width={500}
          height={500}
          src="/Objects/cta3.svg"
          alt="cta decoration"
          className="w-24 h-36 absolute -bottom-10 -right-16"
        />
        <Image
          width={500}
          height={500}
          src="/Objects/send.svg"
          alt="Start with airah"
          className="w-14 h-14 xl:w-20 xl:h-20 absolute -top-5 -right-5 xl:-top-7 xl:-right-7"
        />

        <Heading className={"text-[#1E1749] text-center"}>
          Unlock your personalized journey with AIRAH
        </Heading>
        <Body className="text-center max-w-screen-xl">
          Begin a personalized journey with AIRAH. Our carefully curated content
          and advanced AI technology create a roadmap uniquely tailored to your
          needs, helping you navigate each part of your cancer experience. By
          enabling us to consider your unique information, we ensure you receive
          guidance that’s specific to your needs. Register today to take the
          first step toward a more empowered, informed journey in your care.
        </Body>

        <GradientButton title={"Get Started Now"} className={""} />
      </Container>
    </Container>
  );
};

export default CTA;
