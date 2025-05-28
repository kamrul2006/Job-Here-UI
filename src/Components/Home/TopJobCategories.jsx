import { FaTools, FaCode, FaPaintBrush, FaBullhorn } from "react-icons/fa";

const categories = [
    {
        title: "Engineering",
        icon: <FaTools className="text-4xl text-blue-600" />,
        color: "bg-blue-50",
    },
    {
        title: "Software Development",
        icon: <FaCode className="text-4xl text-purple-600" />,
        color: "bg-purple-50",
    },
    {
        title: "Design",
        icon: <FaPaintBrush className="text-4xl text-pink-600" />,
        color: "bg-pink-50",
    },
    {
        title: "Marketing",
        icon: <FaBullhorn className="text-4xl text-yellow-500" />,
        color: "bg-yellow-50",
    },
];

const TopJobCategories = () => {
    return (
        <section className="py-16 bg-base-100">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-yellow-700 mb-10">
                    Top Job Categories
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`rounded-full shadow-md p-6 w-48 h-48 flex flex-col items-center justify-center transition hover:scale-105 ${cat.color}`}
                        >
                            {cat.icon}
                            <h3 className="text-lg font-semibold mt-3 text-gray-700">{cat.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopJobCategories;
