import Banner from "../Components/Home/Banner";
import JobStatsSection from "../Components/Home/JobStatsSection";
import SomeJob from "../Components/Home/SomeJob";
import TestimonialsSection from "../Components/Home/TestimonialsSection";
import TopJobCategories from "../Components/Home/TopJobCategories";


const HomeLayout = () => {
    return (
        <div>
            <Banner />

            <TopJobCategories />

            < TestimonialsSection />

            <SomeJob />

            <JobStatsSection />
        </div>
    );
};

export default HomeLayout;