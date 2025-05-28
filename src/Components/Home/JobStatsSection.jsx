import { FaBriefcase, FaUserTie, FaPaperPlane, FaUsers } from "react-icons/fa";

const stats = [
    {
        icon: <FaBriefcase className="text-4xl text-yellow-500" />,
        label: "Total Jobs Posted",
        value: "4,320+",
    },
    {
        icon: <FaUserTie className="text-4xl text-green-500" />,
        label: "Total Employers",
        value: "980+",
    },
    {
        icon: <FaPaperPlane className="text-4xl text-purple-500" />,
        label: "Applications Submitted",
        value: "45,200+",
    },
    {
        icon: <FaUsers className="text-4xl text-yellow-500" />,
        label: "Daily Active Users",
        value: "1,150+",
    },
];

const JobStatsSection = () => {
    return (
        <section className="bg-base-100 py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-yellow-600">
                    Platform Stats At a Glance
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition hover:scale-105 duration-300"
                        >
                            {stat.icon}
                            <h3 className="text-2xl font-bold mt-4 text-gray-800">{stat.value}</h3>
                            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobStatsSection;
