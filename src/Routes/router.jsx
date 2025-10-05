import {
  createBrowserRouter,
  
} from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
       {
        index: true,
        element:<Home></Home>
       },
       {
        path:"about",
        element: <About></About>
       }
    ]
  },
]);