import { Outlet } from "react-router-dom";
import FooterSec from "../Components/Fixed/FooterSec";
import NavbarSec from "../Components/Fixed/NavbarSec";

const Root = () => {
    return (
        <div >

            <NavbarSec />

            <div className="w-full md:max-w-7xl mx-auto">

                <Outlet />

            </div>

            <FooterSec />
        </div>
    );
};

export default Root;