import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Blogs from "../components/Blogs/Blogs";



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
                path : '/blogs',
                element: <Blogs/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }
])

export default router;