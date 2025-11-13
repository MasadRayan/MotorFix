import Image from "next/image";
import Banner from "./components/Banner";
import AboutUs from "./components/AboutUs";
import ContactInfo from "./components/ContactInfo";
import WhyChooseUS from "./components/WhyChooseUS";

export default function Home() {
  return (
    <div className="container mx-auto mt-10">
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ContactInfo></ContactInfo>
      <WhyChooseUS></WhyChooseUS>
    </div>
  );
}
