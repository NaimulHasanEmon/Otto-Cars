import About from "./About/About";
import Banner from "./Banner/Banner";
import BlackBox from "./BlackBox/BlackBox";
import Services from "./Service/Service";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Services></Services>
      <BlackBox></BlackBox>
    </div>
  );
};

export default Home;
