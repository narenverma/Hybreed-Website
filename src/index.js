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
        path: "/case-studies/equizen-engage",
        element: <EquizenCaseStudy />,  
      },
      {
        path: "*",
        element: <NotFoundPage />,  
      },
    ]
  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
