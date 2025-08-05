import React, { useContext } from "react";
import { useNavigate } from "react-router";

import ROUTES from "../constants/lib/routes";
import '../assets/stylesheets/atoms/Navbar.css';
import { IsConnectedContext } from "../context/IsConnectedContext";

export function Navbar() {
  const navigate = useNavigate();
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);

  function handleLogout() {
    setIsConnected(false);
    alert("Logout successful");
    navigate(ROUTES.LOGIN);
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div >
          <button className="button" onClick={() => navigate(ROUTES.HOME)} >Home</button>
          {isConnected && (<button onClick={() => navigate(ROUTES.ABOUT)}>About</button>)}
        </div >
        <div>
        </div>
        <div >
          {isConnected && (<button onClick={handleLogout}>Logout</button>)}
        </div >
      </div>
    </>
  );
}
