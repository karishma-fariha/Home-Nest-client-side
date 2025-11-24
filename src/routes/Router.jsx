import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Pages/Home";
import AllProperties from "../Pages/AllProperties";
import AddProperties from "../Pages/AddProperties";
import MyProperties from "../Pages/MyProperties";
import MyRatings from "../Pages/MyRatings";

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
                    element: <AddProperties></AddProperties>
                },
                {
                    path: '/myProperties',
                    element: <MyProperties></MyProperties>
                },
                {
                    path: '/myRatings',
                    element: <MyRatings></MyRatings>
                },


            ]
        },
        {
            path: '/*',
            element: <div>Error 404</div>
        }
    ])
export default router;