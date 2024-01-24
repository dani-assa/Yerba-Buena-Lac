import { Outlet } from "react-router-dom";
import Navbar1 from "../navbar/Navbar1";
import Footer from "../footer/Footer";
import { UserProvider } from "../../context/UserContext";
UserProvider;

const RootLayout = () => {
  return (
    <UserProvider>
      <Navbar1 />
      <main>
        <Outlet />
      </main>
      <Footer />
    </UserProvider>
  );
};

export default RootLayout;
