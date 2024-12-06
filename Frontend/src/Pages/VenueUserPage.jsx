import React, { useState } from "react";
import Navbar from "../Components/Navbar";

function VenueUserPage() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const renderComponent = () => {
    switch (activeMenu) {
      case "Dashboard":
        return <div>Dashboard</div>;
      case "Alerts":
        return <div>Alerts</div>;
      case "Buttons":
        return <div>Buttons</div>;
      case "Cards":
        return <div>Cards</div>;
      case "Tables":
        return <div>Tables</div>;
      case "Login":
        return <div>Login</div>;
      case "Register":
        return <div>Register</div>;
      default:
        return <div>Dashboard</div>;
    }
  };

  return (
    <>
      <Navbar menuItems={[]} />
      <div className="app flex">
        <div className="sidebar  w-1/4 bg-gray-800 text-white h-screen p-4">
          <div>Venue User</div>
          <ul className="space-y-4">
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Dashboard" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Dashboard")}
            >
              Dashboard
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Alerts" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Alerts")}
            >
              Alert
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Buttons" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Buttons")}
            >
              Button
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Cards" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Cards")}
            >
              Cards
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Tables" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Tables")}
            >
              Tables
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Login" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Login")}
            >
              Login
            </li>
            <li
              className={`cursor-pointer p-2 rounded ${
                activeMenu === "Register" ? "bg-gray-600" : ""
              }`}
              onClick={() => setActiveMenu("Register")}
            >
              Register
            </li>
          </ul>
        </div>
        <div className="main-content w-3/4 p-6">{renderComponent()}</div>
      </div>
    </>
  );
}

export default VenueUserPage;
