import HeroSection from "../components/HeroSection";
import TopSelling from "../components/TopSelling";
import "./Home.css";

export const HomePage = () => {
  return (
    <>
      <main className="main-content-container">
        <HeroSection />
        <TopSelling />
      </main>
    </>
  );
};
