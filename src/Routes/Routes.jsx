import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import AddToy from "../components/AddToy/AddToy";
import AllToys from "../components/AllToys/AllToys";
import MyToys from "../components/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path : '/',
        element: <Main/>,
        children: [
            {
                path : '/',
                element: <Home/>
            },
            {
                path : '/all-toys',
                element: <AllToys/>,
                loader : () => fetch('http://localhost:5000/addToy')
            },
            {
                path : '/my-toys',
                element: <PrivateRoute> <MyToys/> </PrivateRoute>
            },
            {
                path : '/add-toy',
                element: <PrivateRoute> <AddToy/> </PrivateRoute>
            },
            {
                path : '/blogs',
                element: <Blogs/>
            },
            {
                path : '/login',
                element: <Login/>
            },
            {
                path : '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default router;