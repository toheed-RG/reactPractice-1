import React from 'react';
import { useContext } from 'react';
import { createAppRouter } from './router';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import './index.css';
import { TodoProvider } from './context/TodoContext';
import { IsConnectedContext, IsConnectedProvider } from './context/IsConnectedContext';

function AppContent() {
  const { isConnected } = useContext(IsConnectedContext);
  const appRouter = createAppRouter(isConnected);

  return <RouterProvider router={appRouter} />;
}

function App() {
  return (
    <IsConnectedProvider>
      <TodoProvider>
        <AppContent />
      </TodoProvider>
    </IsConnectedProvider>
  );
}

export default App;
