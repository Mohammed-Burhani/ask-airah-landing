import { PrimaryButton } from "@/components/constants/Blocks/PrimaryButton";
import Container from "@/components/constants/Container";
import { Body } from "@/components/constants/textComponents/Body";
import { LargeHeading } from "@/components/constants/textComponents/LargeHeading";
import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="bg-[#0A3F8D] xl:flex justify-between items-center h-full xl:h-screen xl:!overflow-hidden">
      <div className="xl:hidden">
        <Image
          alt="Ask Airah Banner"
          width={500}
          height={500}
          src={"/Banner/banner.png"}
          className="h-72 md:h-96 w-full object-cover !object-center"
          data-aos="fade-down"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
        />
      </div>

      <Container className="max-w-screen-lg flex flex-col justify-center xl:justify-normal items-center xl:items-start gap-10 xl:gap-14 xl:mt-20">
        <LargeHeading
          className={"text-white text-center xl:text-start"}
          data-aos="fade-right"
        >
          Bring CLARITY to your health decisions and feel in CONTROL
        </LargeHeading>

        <Body
          className="text-white text-center xl:text-start"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-easing="ease"
        >
          At AIRAH, we’re here to simplify complex medical information and offer
          insights crafted just for you. Our goal is to empower you with
          knowledge, so you can feel confident and in control of your health
          decisions at every step of your cancer journey.
        </Body>

        <PrimaryButton
          title={"Ask AIRAH"}
          className={"!w-fit"}
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-easing="ease"
        />
      </Container>

      <div className="hidden xl:flex h-screen mt-40 4xl:mt-52 w-full xl:w-auto">
        <Image
          alt="Ask Airah Banner"
          width={500}
          height={500}
          src={"/Banner/banner.png"}
          className="h-screen w-full object-cover !object-center [clip-path:polygon(0%_0%,100%_0%,100%_100%,0%_100%,20%_0%)]"
          data-aos="fade-left"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        />
      </div>
    </div>
  );
};

export default Banner;
