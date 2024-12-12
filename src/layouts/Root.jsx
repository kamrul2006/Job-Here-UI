import { Outlet } from "react-router-dom";
import FooterSec from "../Components/Fixed/FooterSec";

const Root = () => {
    return (
        <div className="w-full md:max-w-7xl mx-auto">

            <Outlet />

            <FooterSec />

        </div>
    );
};

export default Root;