import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';

const container = document.getElementById('root');

if (container) {
  const app = (
    <React.StrictMode>
      <HelmetProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
  );

  if (import.meta.env.DEV) {
    createRoot(container).render(app);
  } else {
    hydrateRoot(container, app);
  }
}
