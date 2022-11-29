import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import SignUp from "../../Pages/SignUp/SignUp";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    },
    
])

export default router;