import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import MovieDetails from "../Pages/MovieDetails/MovieDetails";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/movie-details/:id',
                element: <MovieDetails />
            },
        ]
    }
])

export default routes;