import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { IsConnectedContext } from '../context/context';
import ROUTES from '../constants/lib/routes';

export function Navbar() {
  const { isConnected, setIsConnected } = useContext(IsConnectedContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsConnected(false);
    navigate(ROUTES.LOGIN);
  };

  return (
    <nav style={{ display: 'flex', alignItems: 'center', padding: '1rem' }}>
      <div>
        <button onClick={() => navigate(ROUTES.HOME)} style={{ marginRight: '1rem' }}>Home</button>
        {isConnected && (
          <button onClick={() => navigate(ROUTES.ABOUT)}>About</button>
        )}
      </div>
      <div>
        {isConnected && (
          <div style={{ marginLeft: 'auto', background: 'red' }}>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </nav>
  );
}
