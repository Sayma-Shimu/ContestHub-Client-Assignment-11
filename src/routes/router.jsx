import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

import Login from "../pages/Login";
import AuthLayout from "../pages/AuthLayout";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
            }

        ]
    },

    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,

        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            },
        
        ]
    },

    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    }

]);


export default router