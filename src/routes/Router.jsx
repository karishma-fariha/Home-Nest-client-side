import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";

const router =createBrowserRouter(
    [
    {
        path:'/',
        element:<HomeLayout></HomeLayout>,
    },
    {
       path:'/allProperties',
        element:<div>Hello World</div>
    },
    {
         path:'/addProperties',
        element:<div>Hello World</div>
    },
    {
         path:'/myProperties',
        element:<div>Hello World</div>
    },
    {
         path:'/myRatings',
        element:<div>Hello World</div>
    },
    {
         path:'/*',
        element:<div>Error 404</div>
    }
])
export default router;