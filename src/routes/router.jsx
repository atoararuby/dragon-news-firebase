import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../Layout/AuthLayout";

const router = createBrowserRouter(
    [
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path: '',
                    element:<Home></Home>
                },
                {
                    path: '/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader: ()=> fetch('/news.json')
                },
            ]
        },
        {
            path:'/auth',
            element:<AuthLayout></AuthLayout>,
            children:[
               {
                 path: '/auth/login',
                element:<Login></Login>
               },
               {
                 path: '/auth/register',
                element:<Register></Register>
               },
            ]
        },
        {
            path:'/news',
            element:<h3>News Layout</h3>
        },
        {
            path:'/*',
            element:<h4>Error 404</h4>
        }
    ]
)

export default router; 