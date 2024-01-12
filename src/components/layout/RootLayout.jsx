import { Outlet } from "react-router-dom";
import Navbar1 from "../navbar/Navbar1";
import Footer from "../footer/Footer";


const RootLayout = () => {
  return (
    <div>
      <Navbar1 />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
};

export default RootLayout