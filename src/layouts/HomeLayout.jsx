import Banner from "../Components/Home/Banner";
import SomeJob from "../Components/Home/SomeJob";
import TestimonialsSection from "../Components/Home/TestimonialsSection";


const HomeLayout = () => {
    return (
        <div>
            <Banner />

            < TestimonialsSection />

            <SomeJob />
        </div>
    );
};

export default HomeLayout;