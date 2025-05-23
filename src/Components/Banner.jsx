import bg from "../assets/banner3.jpg"
import { motion } from "framer-motion";
import si from "../assets/abc.png"
import sii from "../assets/s2.png"
import { JackInTheBox, Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Banner = () => {
    return (
        <div className="lg:pt-20">
            <div
                className=" bg-cover bg-center mb-5 md:mb-10 lg:pt-10"
                style={{ backgroundImage: `url(${bg})`, }}>

                <div className=" md:flex items-center">

                    {/* ----------------text div ------------------ */}
                    <div className=" text-neutral-content py-5 md:py-24 md:w-1/2 mx-auto">
                        <div className="pl-5 md:pl-20">
                            <Zoom direction="left" delay={50}>
                                <h1
                                    className="md:mb-5 mb-2 text-blue-700 text-3xl md:text-5xl font-bold md:w-3/4">
                                    The Easiest Way
                                    to Get Your New Job
                                </h1></Zoom>

                            <Slide duration={1500}>
                                <p className="mb-5 text-xs md:text-base text-error">
                                    Each month, more than 3 million job seekers turn to <br />
                                    website in their search for work, making over 140,000 <br />
                                    applications every single day
                                </p></Slide>
                            <JackInTheBox>
                                <Link to={"/allJob"}>
                                    <button className="btn btn-primary btn-outline btn-xs rounded-full md:btn-sm">Get Started</button>
                                </Link>
                            </JackInTheBox>
                        </div>
                    </div>

                    {/* -------------------------image div--------- */}
                    <div className="mx-auto w-1/2 pb-10 md:pr-10">
                        <motion.img
                            animate={{ x: [1, 30, 0], y: [10, 50, 10] }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, }} src={sii} className="rounded-full ml-auto w-1/3 h-1/4 md:hidden" />

                        <motion.div
                            animate={{ x: [0, 20, 0] }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, }}>
                            <img
                                src={si} className=" mx-auto w-40 md:w-full h-1/2 -mb-10" />
                        </motion.div>

                        <motion.img
                            animate={{ x: [1, -30, 0], y: [1, -30, 0] }}
                            transition={{ duration: 3, delay: 1, ease: "linear", repeat: Infinity, }} src={sii} className="rounded-full w-1/3 h-1/4 mr-auto md:hidden" />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;


