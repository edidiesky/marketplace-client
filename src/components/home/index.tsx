import Hero from "./Hero";
import About from "./About";
import TopIdeas from "./TopIdeas";
// Newsletter
import Header from "../common/Header";
import Footer from "../common/Footer";
import SmoothScroll from "@/constants/SmoothScroll";
const HomeIndex = () => {
  return (
    <SmoothScroll>
      <Header />
      <Hero />
      <About />
      <TopIdeas />
      {/* <Reviews /> */}
      {/* <FAQ /> */}
      {/* <Newsletter /> */}

      <Footer />
    </SmoothScroll>
  );
};

export default HomeIndex;
