import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import FocusUCaseStudy from './pages/CaseStudy/FocusUCaseStudy';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import EquizenCaseStudy from './pages/CaseStudy/EquizenCaseStudy';
import LifeCraftingCaseStudy from './pages/CaseStudy/LifeCraftingCaseStudy';
import FourPCapitalCaseStudy from './pages/CaseStudy/FourPCapitalCaseStudy';
import TurboHireCaseStudy from './pages/CaseStudy/TurboHireCaseStudy';
import TurboHirePlatformCaseStudy from './pages/CaseStudy/TurboHirePlatformCaseStudy';
import MercerCaseStudy from './pages/CaseStudy/MercerCaseStudy';
import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/case-studies",
        element: <Navigate to="/"  />,  
      },
      {
        path: "/case-studies/focusu-engage",
        element: <FocusUCaseStudy />,  
      },
      {
        path: "/case-studies/equizen",
        element: <EquizenCaseStudy />,  
      },
      {
        path: "/case-studies/lifecrafting",
        element: <LifeCraftingCaseStudy />,  
      },
      {
        path: "/case-studies/4pcapital",
        element: <FourPCapitalCaseStudy />,  
      },
      {
        path: "/case-studies/mercer",
        element: <MercerCaseStudy />,
      },
{
        path: "/case-studies/turbohire",
        element: <TurboHireCaseStudy />,  
      },
      {
        path: "/case-studies/turbohire-platform",
        element: <TurboHirePlatformCaseStudy />,  
      },
      {
        path: "*",
        element: <NotFoundPage />,  
      },
    ]
  },

])

const helmetContext = {};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <HelmetProvider context={helmetContext}>
    <RouterProvider router={router} />
    {/* <App /> */}
  </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
