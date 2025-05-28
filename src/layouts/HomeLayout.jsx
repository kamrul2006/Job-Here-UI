import Banner from "../Components/Home/Banner";
import JobStatsSection from "../Components/Home/JobStatsSection";
import Newsletter from "../Components/Home/Newsletter";
import RecentJobs from "../Components/Home/RecentJobs";
import SomeJob from "../Components/Home/SomeJob";
import TestimonialsSection from "../Components/Home/TestimonialsSection";
import TopJobCategories from "../Components/Home/TopJobCategories";


const HomeLayout = () => {
    return (
        <div>
            <Banner />

            <TopJobCategories />

            <RecentJobs />

            < TestimonialsSection />

            <SomeJob />

            <JobStatsSection />

            <Newsletter />
        </div>
    );
};

export default HomeLayout;