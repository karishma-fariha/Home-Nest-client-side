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
import PropertyDetails from "../Pages/PropertyDetails";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import DashboardLayout from "../Layouts/DashboardLayout";
import Dashboard from "../Pages/Dashboard";
import OurStory from "../Components/OurStory";

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
                    path:'/about',
                    element:<About></About>
                },
                {
                    path:'/contact',
                    element:<ContactUs></ContactUs>
                },
                {
                    path:'/ourStory',
                    element:<OurStory></OurStory>
                }

            ]
        },
        {
            path: '/',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "login",
                    element: <Login></Login>
                },
                {
                    path: "register",
                    element: <Register></Register>
                },

            ]
        },
        {
            path:'/properties/:id',
            element:<PropertyDetails></PropertyDetails>
           

        },
        {
            path:'/',
            element:<PrivateRouter>
                <DashboardLayout></DashboardLayout>
            </PrivateRouter>,
            children:[
                {
                    path:'dashboard',
                    element:<Dashboard></Dashboard>
                },
                {
                    path:'myProperties',
                    element:<MyProperties></MyProperties>
                },
                {
                    path:'addProperties',
                    element:<AddProperties></AddProperties>
                },
                {
                    path:'myRatings',
                    element:<MyRatings></MyRatings>

                }
            ]
        },
        {
            path: '/*',
            element: <Error></Error>
        }
    ])
export default router;