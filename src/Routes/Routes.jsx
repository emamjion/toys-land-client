import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";



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
                element: <Blogs/>
            },
            {
                path : '/my-toys',
                element: <Blogs/>
            },
            {
                path : '/add-toy',
                element: <Blogs/>
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