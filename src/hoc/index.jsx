import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Container from "./Container";
import TablePage from "../pages/TablePage/TablePage";

const Routes = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Container />,
            children: [
                {
                    index: true,
                    element: <TablePage />,
                },
            ],
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Routes;
