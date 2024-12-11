import { Outlet } from "react-router-dom";
import NavbarSec from "../Components/Fixed/NavbarSec";
import FooterSec from "../Components/Fixed/FooterSec";

const Root = () => {
    return (
        <div className="w-full md:max-w-7xl mx-auto">
            <NavbarSec />

            <Outlet />

            <FooterSec />

        </div>
    );
};

export default Root;