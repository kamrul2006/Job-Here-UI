import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
    {
        name: "Sarah Ahmed",
        role: "Frontend Developer at TechNova",
        image: "https://randomuser.me/api/portraits/women/65.jpg",
        quote: "Landing my dream job through this platform was effortless. The process was fast, and I got responses from top companies within days.",
    },
    {
        name: "Rafiul Islam",
        role: "UX Designer at CreativeHub",
        image: "https://randomuser.me/api/portraits/men/75.jpg",
        quote: "This site connected me with employers who truly valued my work. The user interface is clean, and applying is super easy.",
    },
    {
        name: "Tanisha Chowdhury",
        role: "Backend Engineer at CloudStack",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        quote: "I applied to 5 jobs and got 3 interviews in a week! Couldn't be happier with the results. Highly recommended.",
    },
];

const TestimonialsSection = () => {
    return (
        <section className="bg-base-200 py-16">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-yellow-600">
                    Success Stories From Our Users
                </h2>

                <div className="grid gap-8 md:grid-cols-3">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center transition hover:-translate-y-1 hover:shadow-xl duration-300"
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-20 h-20 rounded-full border-4 border-yellow-500 object-cover mb-4"
                            />
                            <FaQuoteLeft className="text-yellow-400 text-2xl mb-2" />
                            <p className="text-sm text-gray-700 italic mb-4">"{t.quote}"</p>
                            <h4 className="font-semibold text-lg text-gray-900">{t.name}</h4>
                            <span className="text-sm text-gray-500">{t.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
