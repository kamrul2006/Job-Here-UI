import { useState } from "react";

const Newsletter = () => {
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();

        if (!email) return;

        // Simulate async subscription request
        setTimeout(() => {
            setSubscribed(true);
            e.target.reset();
        }, 300);
    };

    return (
        <section
            className="bg-gradient-to-r from-yellow-600 rounded-2xl mb-5 to-yellow-800 py-16 px-6 sm:px-10 lg:px-16 text-white"
            aria-labelledby="newsletter-heading"
        >
            <div className="max-w-xl mx-auto text-center">
                <h2
                    id="newsletter-heading"
                    className="text-4xl font-extrabold mb-4 tracking-tight drop-shadow-lg"
                >
                    📬 Get Latest Job Alerts
                </h2>
                <p className="mb-10 text-yellow-200 text-lg leading-relaxed">
                    Subscribe to our newsletter and stay updated with top job opportunities directly in your inbox.
                </p>

                <form
                    onSubmit={handleSubscribe}
                    className="flex flex-col sm:flex-row items-center gap-4"
                    aria-describedby="subscription-message"
                    noValidate
                >
                    <label htmlFor="email" className="sr-only">
                        Email address
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email address"
                        className="w-full sm:flex-grow px-5 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 transition"
                        aria-required="true"
                        aria-invalid={subscribed ? "false" : undefined}
                    />

                    <button
                        type="submit"
                        className="inline-flex items-center justify-center bg-white text-yellow-700 font-semibold px-7 py-3 rounded-lg shadow-lg hover:bg-yellow-50 focus:outline-none focus:ring-4 focus:ring-yellow-400 transition-transform active:scale-95"
                    >
                        Subscribe
                        <svg
                            className="ml-2 h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </form>

                {subscribed && (
                    <p
                        id="subscription-message"
                        role="alert"
                        className="mt-6 text-green-400 font-semibold text-lg animate-fadeIn"
                    >
                        🎉 Thanks for subscribing! Stay tuned for updates.
                    </p>
                )}
            </div>
        </section>
    );
};

export default Newsletter;
