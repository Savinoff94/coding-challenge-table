import { Outlet } from "react-router-dom";

function Container(){
    return (
        <div className="flex flex-col min-h-screen mx-auto h-2">
            <Outlet />
        </div>
    );
}

export default Container;