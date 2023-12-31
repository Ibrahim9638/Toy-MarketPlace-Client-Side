import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";
import SingleDetailsToy from "../Pages/SingleDetailsToy/SingleDetailsToy";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
            path:'/blog',
            element:<Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path:'/register',
          element: <Register></Register>
        },
        {
          path:'/alltoys',
          element:<AllToys></AllToys>
        },
        {
          path: '/addtoys',
          element:<AddToys></AddToys>
        },
        {
          path: '/my-toys',
          element:<PrivateRoute><MyToys></MyToys></PrivateRoute>
        },
        {
          path: 'updateToy/:id',
          element: <UpdateToy></UpdateToy>,
          loader: ({params})=> fetch(`https://assignment-11-server-navy-alpha.vercel.app/my-toys/${params.id}`)
        },
        {
          path: '/singleDetailsToy/:id',
          element:<PrivateRoute><SingleDetailsToy></SingleDetailsToy></PrivateRoute>,
          loader: ({params})=>fetch(`https://assignment-11-server-navy-alpha.vercel.app/toys/${params.id}`)
        }
      ]
    },
  ]);

  export default router;