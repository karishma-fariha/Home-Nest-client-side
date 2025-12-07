import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import PrivateRouter from "../Provider/PrivateRouter";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: '/allProperties',
                    element: <AllProperties></AllProperties>
                },
                {
                    path: '/addProperties',
                    element: <PrivateRouter>
                        <AddProperties></AddProperties>
                    </PrivateRouter>
                },
                {
                    path: '/myProperties',
                    element: <PrivateRouter>
                        <MyProperties></MyProperties>
                    </PrivateRouter>
                },
                {
                    path: '/myRatings',
                    element: <MyRatings></MyRatings>
                },


            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <Login></Login>
                },
                {
                    path: "/auth/register",
                    element: <Register></Register>
                },

            ]
        },
        {
            path: '/*',
            element: <Error></Error>
        }
    ])
export default router;