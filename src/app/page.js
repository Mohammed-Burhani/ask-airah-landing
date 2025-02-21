import Banner from "@/components/home/section/Banner";
import CTA from "@/components/home/section/CTA";
import HowTo from "@/components/home/section/HowTo";
import Insights from "@/components/home/section/Insights";
import OurMission from "@/components/home/section/OurMission";
import Team from "@/components/home/section/Team";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Banner />
      <OurMission />
      <HowTo />
      <CTA />
      <Insights />
      <Team />
    </>
  );
}
