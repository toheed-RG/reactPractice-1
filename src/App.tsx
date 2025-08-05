import { useContext } from 'react';
import { createAppRouter } from './router';
import { RouterProvider } from 'react-router-dom';

import './App.css';
import './index.css';
import { IsConnectedContext, IsConnectedProvider } from './context/context';

function AppContent() {
  const { isConnected } = useContext(IsConnectedContext);
  const appRouter = createAppRouter(isConnected);

  return <RouterProvider router={appRouter} />;
}

function App() {
  return (
    <IsConnectedProvider>
      <AppContent />
    </IsConnectedProvider>
  );
}

export default App;
