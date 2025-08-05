import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ROUTES from '../constants/lib/routes';
import { IsConnectedContext } from '../context/context';

const Login = () => {
    const [username, setUsername] = useState('user');
    const [password, setPassword] = useState('user');
    const { isConnected, setIsConnected } = useContext(IsConnectedContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (isConnected) {
            navigate(ROUTES.HOME);
        }
    }, [isConnected, navigate]);

    const handleLogin = (e) => {
        e.preventDefault(); // to prevent the default full page reload on form submission
        if (username === 'user' && password === 'user') {
            setIsConnected(true);
            navigate(ROUTES.HOME);
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>Note: This is a static login form for demonstration purposes.</p>
                <p>Username: user, Password: user</p>
                <p>To simulate a login, you can use the above credentials.</p>
                <p>After logging in, you will be redirected to the home page.</p>
            </div>
        </div>
    );
};

export default Login;