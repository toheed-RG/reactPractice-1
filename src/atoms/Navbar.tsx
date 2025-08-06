import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Button } from "@aws-amplify/ui-react";

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
          <Button variation="link" className="button" onClick={() => navigate(ROUTES.HOME)} >Home</Button>
          {isConnected && (<Button variation="link" onClick={() => navigate(ROUTES.ABOUT)}>About</Button>)}
        </div >
        <div>
        </div>
        <div >
          {isConnected && (<Button variation="link" onClick={handleLogout}>Logout</Button>)}
        </div >
      </div>
    </>
  );
}
