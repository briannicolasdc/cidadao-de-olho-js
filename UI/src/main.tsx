import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RedesComponent from './pages/RedesSociaisPage.tsx';
import DeputadosPage from './pages/DeputadosPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/deputados',
    element: <DeputadosPage />
  },
   {
    path: '/redes-sociais',
    element: <RedesComponent />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);