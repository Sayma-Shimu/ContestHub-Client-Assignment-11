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
import Winninngs from "../pages/Winninngs";
import MyProfile from "../pages/MyProfile";
import AddContest from "../pages/AddContest";
import MyContestCreator from "../pages/MyContestCreator";
import ManageUsers from "../pages/ManageUsers";
import ManageContests from "../pages/ManageContests";
import Submissions from "../pages/Submissions";
import PrivateRout from "../components/provider/PrivateRoute";
import AboutUs from "../pages/AboutUs";
import OverView from "../pages/overView/OverView";




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
                path: 'about-us',
                element: <AboutUs></AboutUs>
            },

            {
                path: 'contest-details/:id',
                element: <PrivateRout><ContestDetails></ContestDetails></PrivateRout>
            },

            {
                path: 'payment/:id',
                element: <PrivateRout><Payment></Payment></PrivateRout>
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
        element: <PrivateRout><Dashboard></Dashboard></PrivateRout>,
        children: [
            {
                path: 'participated-contests',
                element: <MyContestUser></MyContestUser>
            },
            {
                path: 'my-winnings',
                element: <Winninngs></Winninngs>
            },
            {
                path: 'add-contest',
                element: <AddContest></AddContest>
            },
            {
                path: 'created-contests',
                element: <MyContestCreator></MyContestCreator>
            },
            {
                path: 'submissions/:id',
                element: <Submissions></Submissions>
            },
            {
                path: 'manage-users',
                element: <ManageUsers></ManageUsers>
            },
            {
                path: 'manage-contests',
                element: <ManageContests></ManageContests>
            },
            {
                path: 'my-profile',
                element: <MyProfile></MyProfile>
            },

            {
                path: 'over-view',
                element: <OverView></OverView>
            }
        ]
    },

    {
        path: "/*",
        element: <ErrorPage></ErrorPage>,
    }

]);


export default router