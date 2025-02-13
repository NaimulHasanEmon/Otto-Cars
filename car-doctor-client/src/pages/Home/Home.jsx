import About from "./About/About";
import Banner from "./Banner/Banner";
import BlackBox from "./BlackBox/BlackBox";
import CoreFeatures from "./coreFeatures/coreFeatures";
import PopularProducts from "./PopularProducts/PopularProducts";
import Services from "./Service/Service";
import Team from "./Team/Team";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <BlackBox></BlackBox>
      <PopularProducts></PopularProducts>
      <Team></Team>
      <CoreFeatures></CoreFeatures>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
