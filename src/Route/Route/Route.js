import { createBrowserRouter } from "react-router-dom";
import Main from "../../Pages/Layout/Main"
import Home from "../../Pages/Home/Home/Home"
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/LogIn/Login";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import CategoryProducts from "../../Pages/AllProducts/CategoryProducts";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import AllSeller from "../../Pages/AllSeller/AllSeller";
import AllBuyer from "../../Pages/AllBuyer/AllBuyer";



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
                element: <AllProducts></AllProducts>
            },
            {
                path: '/myorders',
                element: <MyOrders></MyOrders>
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
                element: <AllSeller></AllSeller>
            },
            {
                path: '/allbuyer',
                element: <AllBuyer></AllBuyer>
            },
            {
                path: '/blog',
                element: <SignUp></SignUp>
            },
            {
                path: '/category/:name',
                element: <CategoryProducts></CategoryProducts>,
                loader : ({params}) => fetch(`http://localhost:5000/category/${params.name}`)
            }
        ]
    },
    
])

export default router;