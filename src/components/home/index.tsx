import Hero from "./Hero";
import About from "./About";
import TopIdeas from "./TopIdeas";
import Reviews from "./Reviews";
import Newsletter from "../common/Newsletter";
// Newsletter
import Header from "../common/Header";
import Footer from "../common/Footer";
import SmoothScroll from "@/constants/SmoothScroll";
import FAQ from "./FAQ";
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
