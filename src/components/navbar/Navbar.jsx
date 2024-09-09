import "./navbar.scss";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";
import { motion } from "framer-motion";
import { Sidebar } from "../sidebar/Sidebar";

export const Navbar = () => {
  return (
    <div className="navbar">
      {/* SideBar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0.5, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lokendra Dev
        </motion.span>
        <div className="social">
          <a href="https://www.linkedin.com/in/lokendra-sahare-7ab577261/">
            <img src={navIcon1} alt="" />
          </a>
          <a href="#">
            <img src={navIcon2} alt="" />
          </a>
          <a href="#">
            <img src={navIcon3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};
