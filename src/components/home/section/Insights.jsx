"use client";

import { useState, useRef } from "react";
import Container from "@/components/constants/Container";
import { Body } from "@/components/constants/textComponents/Body";
import { Heading } from "@/components/constants/textComponents/Heading";
import { PrimaryButton } from "@/components/constants/Blocks/PrimaryButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import { LargeCaption } from "@/components/constants/textComponents/LargeCaption";
import { SmallCaption } from "@/components/constants/textComponents/SmallCaption";

const slides = [
  {
    image: "/Banner/blog-image.png",
    title:
      "The Journey of Resilience: How to Stay Strong Mentally While Battling Cancer",
    description:
      "Discover essential mental health strategies, resilience-building tips, and sources of emotional support to stay strong and centered throughout your cancer journey.",
  },
  {
    image: "/Banner/blog-image-2.png",
    title: "Nutrition & Well-being: Eating Right During Cancer Treatment",
    description:
      "Learn how balanced nutrition can support your body’s strength, boost immunity, and help you cope better with cancer treatments.",
  },
  {
    image: "/Banner/blog-image-3.png",
    title: "Stories of Hope: Real-Life Journeys of Cancer Survivors",
    description:
      "Be inspired by real-life stories of resilience, courage, and triumph from cancer survivors who defied the odds.",
  },
];

const Insights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <Container className={"overflow-hidden"}>
      <div className="flex flex-col justify-center items-center gap-4">
        <Heading className="text-[#1E1749] text-center">
          Insights & Inspiration
        </Heading>
        <Body className="text-center max-w-screen-xl">
          Explore inspiring stories, expert advice, and heartfelt insights
          curated to bring you hope and resilience. Let these experiences guide
          and uplift you as you navigate your journey.
        </Body>
      </div>

      <div className="flex flex-wrap 2xl:flex-nowrap items-center justify-center gap-10 mt-5 xl:gap-40 xl:mt-20 relative">
        {/* Swiper Slider */}
        <div className="relative">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper w-[300px] h-[400px] xs:w-[300px] xs:h-[500px] 4xl:w-[500px] 4xl:h-[700px]"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} className="relative">
                <Image
                  src={slide.image}
                  width={500}
                  height={500}
                  alt={slide.title}
                  className="object-cover h-full select-none"
                />
                <div className="flex flex-col gap-4 bg-gradient-to-t from-[#111] to-transparent absolute bottom-0 w-full h-52 px-7">
                  <div className="bg-[#F9B50C] h-2 md:h-3 w-20 mt-7 mx-auto xl:mx-0" />
                  <SmallCaption className={"text-white max-w-sm text-center xl:text-start"}>
                    {slides[activeIndex].title}
                  </SmallCaption>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
        </div>

        {/* Dynamic Content for Active Slide */}
        <div className="max-w-screen-sm text-center items-center xl:items-start xl:text-start flex flex-col gap-4">
          <Heading className="text-[#1E1749]">
            {slides[activeIndex].title}
          </Heading>
          <Body className={"text-center xl:text-start"}>
            {slides[activeIndex].description}
          </Body>

          <PrimaryButton
            title="Explore More"
            className="!w-fit !px-10"
            textClass="text-[#201B3F] !font-bold"
          />

          <div className="flex gap-4 mt-4">
            <button
              onClick={handlePrev}
              className={`bg-[#1E1749] text-white p-4 rounded-full ${
                activeIndex === 0 ? "opacity-40" : ""
              }`}
              disabled={activeIndex === 0}
            >
              <ArrowLeft color="#fff" size={32} />
            </button>
            <button
              onClick={handleNext}
              className={`bg-[#1E1749] text-white p-4 rounded-full ${
                activeIndex === 2 ? "opacity-40" : ""
              }`}
              disabled={activeIndex === 2}
            >
              <ArrowRight color="#fff" size={32} />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Insights;
