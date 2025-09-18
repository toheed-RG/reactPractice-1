import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '@aws-amplify/ui-react/styles.css';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import './assets/stylesheets/atoms/AddNewTodoItem.css';
import App from './App';
import { store } from './store';

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    // <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnFocusLoss draggable pauseOnHover theme="colored" />
    </Provider>
    // {/* </StrictMode > */ }
  );
}
