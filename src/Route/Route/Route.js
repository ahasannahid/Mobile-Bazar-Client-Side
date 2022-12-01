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
import Blog from "../../components/Blog/Blog";
import AddProducts from "../../Pages/AddProducts/AddProducts";
import MyProducts from "../../Pages/Myproducts/MyProducts";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "../AdminRoute/AdminRoute";



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
                element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
            },
            {
                path: '/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/allseller',
                element: <AdminRoute><AllSeller></AllSeller></AdminRoute>
            },
            {
                path: '/allbuyer',
                element: <AdminRoute><AllBuyer></AllBuyer></AdminRoute>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
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