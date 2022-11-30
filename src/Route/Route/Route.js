import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/LogIn/Login";
import AllProducts from "../../Pages/AllProducts/AllProducts";



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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/products',
                loader: () => fetch('http://localhost:5000/products'),
                element: <AllProducts></AllProducts>
            },
            {
                path: '/myorders',
                element: <SignUp></SignUp>
            },
            {
                path: '/myproducts',
                element: <SignUp></SignUp>
            },
            {
                path: '/addproducts',
                element: <SignUp></SignUp>
            },
            {
                path: '/allseller',
                element: <SignUp></SignUp>
            },
            {
                path: '/allbuyer',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <SignUp></SignUp>
            },
        ]
    },
    
])

export default router;