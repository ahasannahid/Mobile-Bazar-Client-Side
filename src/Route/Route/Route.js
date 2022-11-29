import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home/Home";
import Main from "../../Pages/Layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            // {
            //     path: '/login',
            //     element: <Login></Login>
            // },
            // {
            //     path: '/signup',
            //     element: <SIgnUp></SIgnUp>
            // },
            // {
            //     path: '/appointment',
            //     element: <Appointment></Appointment>
            // }
        ]
    },
   
])

export default router;