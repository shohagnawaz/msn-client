import Accordion from "../Accordion/Accordion";
import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import ClientLogoBrand from "../ClientLogoBrand/ClientLogoBrand";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <ClientLogoBrand></ClientLogoBrand>
            <Benefits></Benefits>
            <Hero></Hero>
            <Accordion></Accordion>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;