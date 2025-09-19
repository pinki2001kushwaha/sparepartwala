import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import VehicleSelector from "../components/VehicleSelector";
import Categories from "../components/Categories";
import Offers from "../components/Offers";
import CarMakers from "../components/CarMakers";
import Footer from "../components/Footer";
import NavbarTop from "../components/NavbarTop";
import Newsletter from "@/components/Newsletter";
import NoSSR from "@/components/NoSSR";

export default function Home() {
  return (
    <div>
      <NoSSR>
        <NavbarTop/>
        <Navbar />
        <Hero />
        <Features />
        <VehicleSelector />
        <Categories />
        <Offers />
        <CarMakers />
        <Newsletter/>
        <Footer />
      </NoSSR>
    </div>
  );
}