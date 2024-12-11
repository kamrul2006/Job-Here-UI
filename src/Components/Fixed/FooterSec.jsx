
const FooterSec = () => {
    return (
        <div>
            <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com">
                            <img src="https://cdn-icons-png.flaticon.com/512/81/81341.png" alt="F" className="w-8" />
                        </a>
                        <a>
                            <img src="https://cdn-icons-png.flaticon.com/512/739/739193.png" alt="I" className="w-8"/>
                        </a>
                        <a>
                            <img src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt="L" className="w-8"/>
                        </a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                </aside>
            </footer>
        </div>
    );
};

export default FooterSec;