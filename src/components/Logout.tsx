import React, { useContext } from 'react'
import { IsConnectedContext } from '../context/context';

const Logout = () => {
    const { isConnected, setIsConnected } = useContext(IsConnectedContext);
    return (
        <>
            <h1>Logout</h1>
            <button onClick={() => {
                setIsConnected(false);
                alert("Logout successful");
            }}>
                Logout
            </button>
        </>
    )
}

export default Logout