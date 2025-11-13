import Image from "next/image";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import ContactInfo from "./components/ContactInfo";
import WhyChooseUS from "./components/WhyChooseUS";
import OurTeam from "./components/OurTeam";

export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ContactInfo></ContactInfo>
      <OurTeam></OurTeam>
      <WhyChooseUS></WhyChooseUS>
    </div>
  );
}
