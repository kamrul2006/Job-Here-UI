import bg from "../assets/banner3.jpg"
import { motion } from "framer-motion";
import si from "../assets/abc.jpeg"
import sii from "../assets/s2.png"
import NavbarSec from "./Fixed/NavbarSec";
const Banner = () => {
    return (
        <div>
            <div
                className=" bg-cover bg-center mb-5 md:mb-10"
                style={{ backgroundImage: `url(${bg})`, }}>
                <NavbarSec></NavbarSec>
                <div className=" md:flex items-center">

                    {/* ----------------text div ------------------ */}
                    <div className=" text-neutral-content py-5 md:py-24 md:w-1/2 mx-auto">
                        <div className="pl-5 md:px-10">
                            <h1
                                className="md:mb-5 mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:w-3/4">
                                The Easiest Way
                                to Get Your New Job
                            </h1>
                            <p className="mb-5 text-xs md:text-sm text-info">
                                Each month, more than 3 million job seekers turn to
                                website in their search for work, making over 140,000
                                applications every single day
                            </p>
                            <button className="btn btn-primary btn-outline btn-xs rounded-full md:btn-sm">Get Started</button>
                        </div>
                    </div>

                    {/* -------------------------image div--------- */}
                    <div className="mx-auto w-1/2 pb-10 md:pr-10">
                        <motion.img
                            animate={{ x: [1, 30, 0], y: [10, 50, 10] }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, }} src={sii} className="rounded-full ml-auto w-1/3 h-1/4" />

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, }}>
                            <img
                                src={si} className=" bg-[#4160c76e] rounded-tl-full rounded-br-full border-red-500 border-l-8 border-b-8  mx-auto w-40 md:w-96 h-1/2" />
                        </motion.div>
                        <motion.img
                            animate={{ x: [1, -30, 0], y: [1, -30, 0] }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, }} src={sii} className="rounded-full w-1/3 h-1/4 mr-auto" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;