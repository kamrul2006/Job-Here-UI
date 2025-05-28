import bg from "../assets/banner3.jpg";
import si from "../assets/abc.png";
import sii from "../assets/s2.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <section
            className="relative bg-cover bg-center min-h-screen flex items-center justify-center"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-yellow-100/70 backdrop-blur-sm"></div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl md:text-5xl font-extrabold text-yellow-800"
                    >
                        Land Your Dream Job Effortlessly
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-gray-700 text-sm md:text-base"
                    >
                        Join millions of successful job seekers using JobHere. Apply confidently, grow consistently, and find your career path in seconds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1, duration: 0.6 }}
                    >
                        <Link to="/allJob">
                            <button className="bg-yellow-700 text-white px-6 py-2 rounded-full text-sm hover:bg-yellow-800 transition">
                                Explore Opportunities
                            </button>
                        </Link>
                    </motion.div>
                </div>

                {/* Image Content */}
                <div className="md:w-1/2 flex justify-center relative">
                    {/* Animated Side Circles */}


                    <motion.img
                        src={si}
                        className="border-b-4 border-yellow-500 h-auto rounded-xl shadow-2xl"
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                    />


                </div>
            </div>
        </section>
    );
};

export default Banner;
