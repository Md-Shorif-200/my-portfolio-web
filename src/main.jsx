import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './Pages/ErrorPage.jsx';
import MainLayout from './MainLayout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';
import AosInitializer from './Component/AosInitializer.jsx';
import ProjectDetails from './Pages/Home/ProjectDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    errorElement : <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children : [
       {
        path : '/',
        element : <Home></Home>
       },
       {
        path : 'project-details/:id',
        element : <ProjectDetails></ProjectDetails>
       }
    ]
   }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

    {/* initialize aos animation */}
      <AosInitializer></AosInitializer>
  </StrictMode>,
)
