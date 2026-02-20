import Hero from "./component/section/hero";
import Trust from "./component/section/Trust";
import About from "./component/section/About";
import Services from "./component/section/Services";
import Footer from "./component/layout/Footer";
import PortfolioSection from "./component/section/PortfolioSection";
import TestimonialsSection from "./component/section/TestimonialsSection";
import PricingSection from "./component/section/PricingSection";
import FAQSection from "./component/section/FAQSection";
import AwardsSection from "./component/section/AwardsSection";
import TeamSection from "./component/section/TeamSection";
export default function Home() {
  return (
   <>
   <Hero/>
   <Trust/>
   <About/>
 <Services/>
  <PortfolioSection/>
 <TeamSection/>
<TestimonialsSection/>
<PricingSection/>
 <FAQSection/>
  <AwardsSection/>
  <Footer/>
   </>
  );
}
