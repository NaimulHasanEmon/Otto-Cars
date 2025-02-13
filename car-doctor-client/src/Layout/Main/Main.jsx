import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]'>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
