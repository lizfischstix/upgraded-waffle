import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import App from './App.jsx';
import Home from './Elements/Home.jsx';
import About from './Elements/About.jsx';
import Work from './Elements/Work.jsx';
import Contact from './Elements/Contact.jsx';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path:'/about',
        element: <About />,
      },
      {
        path:'/work',
        element: <Work />,
      },
      {
        path:'/contact',
        element: <Contact />
      }
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router} />
)
