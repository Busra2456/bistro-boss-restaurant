import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";

const Main = () => {
       const location =useLocation()
      console.log(location)
      const noHerderFooter = location.pathname.includes('login')
      return (
            <div> 
                  {noHerderFooter || <NavBar></NavBar>}
                  <Outlet></Outlet>
                 {noHerderFooter || <Footer></Footer>}
            </div>
      );
};

export default Main;