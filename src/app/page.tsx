import Hero from "@/components/landing/Hero";
import SectionOne from "@/components/landing/SectionOne";
import AppIntro from "@/components/landing/AppIntro";
import SectionTwo from "@/components/landing/SectionTwo";
import WhyChooseUs from "@/components/landing/WhyChooseUs";
import HowItWorks from "@/components/landing/HowItWorks";
import Pricing from "@/components/landing/Pricing";
import Testimonial from "@/components/global/Testimonial";
import SoftwareList from "@/components/software/SoftwareList";
import SoftwareHeader from "@/components/software/SoftwareHeader";

export default function Home() {
  return (
    <>
      {/* <Hero /> */}
      {/* <SectionOne /> */}
      {/* Header Section */}
      <SoftwareHeader />

      {/* Google Play Style Ranking Section */}
      <SoftwareList />
      {/* <SectionTwo />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <Testimonial /> */}
    </>
  );
}
