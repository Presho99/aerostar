import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartBar,
  faPlane,
  faWallet,
  faChartLine,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "../components/Sidebar.css";
import WorldMap from "../components/WorldMap";
import one from "../assets/one.webp";
import two from "../assets/two.webp";
import three from "../assets/three.jpeg";
import four from "../assets/four.jpeg";

interface SidebarProps {
  onSelect: (selectedItem: string) => void;
}

const Sidebar = () => {
  const navItems: { name: string; icon: any }[] = [
    { name: "Dashboard", icon: faChartBar },
    { name: "Flights", icon: faPlane },
    { name: "Wallet", icon: faWallet },
    { name: "Statistics", icon: faChartLine },
    { name: "Settings", icon: faCog },
  ];

  return (
    <div className="sidebar">
      <div className="profile">
        <div className="dp">
          <img src={two} />
        </div>
        <div className="profile-text">
          <p className="name">Precious Omondi</p>
          <p className="email">omondiprecious@gmail.com</p>
        </div>
      </div>
      <ul className="nav">
        {navItems.map((item, index) => (
          <li key={index} className="nav-itself">
            <FontAwesomeIcon icon={item.icon} className="nav-icon" />
            <p className="nav-name">{item.name}</p>
          </li>
        ))}
      </ul>
      <div className="users">
        <div className="users-title">
          <h3>Active Users</h3>
        </div>

        <div className="circles">
          <div className="circle">
            <img src={one} />
          </div>
          <div className="circle">
            <img src={two} />
          </div>
          <div className="circle">
            <img src={three} />
          </div>
          <div className="circle">
            <img src={four} />
          </div>
          <div className="circle">
            <h3>70+</h3>
          </div>
        </div>
      </div>
      <div className="map">
        <WorldMap />
      </div>
    </div>
  );
};

export default Sidebar;
