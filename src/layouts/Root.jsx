import { Outlet } from "react-router-dom";
import FooterSec from "../Components/Fixed/FooterSec";
import NavbarSec from "../Components/Fixed/NavbarSec";

const Root = () => {
    return (
        <div >

            <NavbarSec></NavbarSec>

            <div className="w-full md:max-w-7xl mx-auto">

                <Outlet />

                <FooterSec />
            </div>
        </div>
    );
};

export default Root;