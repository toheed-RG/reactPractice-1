import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
// import { TodoProvider } from './context/TodoContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      {/* <TodoProvider> */}
      <App />
      {/* </TodoProvider> */}
    </StrictMode>,
  );
}
