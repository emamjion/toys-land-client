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
                element: <AllToys/>
            },
            {
                path : '/my-toys',
                element: <MyToys/>
            },
            {
                path : '/add-toy',
                element: <AddToy/>
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