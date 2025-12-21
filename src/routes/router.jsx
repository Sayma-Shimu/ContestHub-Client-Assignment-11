import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

import Login from "../pages/Login";
import AuthLayout from "../pages/AuthLayout";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home/Home";
import AllContest from "../pages/AllContest";
import ContestDetails from "../pages/ContestDetails";
import Payment from "../pages/Payment";
import Dashboard from "../layouts/Dashboard";
import MyContestUser from "../pages/MyContestUser";




const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts />,
        children: [
            {
                index: true,
                element: <Home />,
            },

            {
                path: 'all-contests',
                element: <AllContest></AllContest>
            },

            {
                path: 'contest-details/:id',
                element: <ContestDetails></ContestDetails>
            },

            {
                path: 'payment/:id',
                element: <Payment></Payment>
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
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            {
                path: 'participated-contests',
                element: <MyContestUser></MyContestUser>
            }
        ]
    },

    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    }

]);


export default router