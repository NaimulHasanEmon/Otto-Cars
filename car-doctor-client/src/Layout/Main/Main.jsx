import { Outlet } from "react-router-dom";
import NavBar from "../../pages/Shared/NavBar/NavBar";
import Footer from "../../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <div className='container mx-auto px-2 sm:px-3 md:px-4 lg:px-5 max-w-7xl'>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
