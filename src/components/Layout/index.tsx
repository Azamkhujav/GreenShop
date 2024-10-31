import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
import BottomNav from "../bottomNav";

export default function Layout() {
  return (
    <div className="container font-cera sm:px-0 px-[20px]">
      <Header />
      <Outlet />
      <Footer />
      <BottomNav />
    </div>
  );
}
