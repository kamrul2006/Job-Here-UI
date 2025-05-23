const FooterSec = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Company Info */}
                <div>
                    <h2 className="text-xl font-semibold text-white mb-4">Job Here</h2>
                    <p className="text-sm leading-relaxed">
                        Your trusted platform for finding the right job with verified listings and smart filters. Built for professionals, by professionals.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Jobs</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Post a Job</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Contact</a></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-3">Resources</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-400 transition">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">FAQs</a></li>
                        <li><a href="#" className="hover:text-blue-400 transition">Support</a></li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-medium text-white mb-3">Connect with Us</h3>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://facebook.com" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" className="w-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-6 hover:scale-110 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-6 hover:scale-110 transition" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Job Here — All rights reserved.
            </div>
        </footer>
    );
};

export default FooterSec;
