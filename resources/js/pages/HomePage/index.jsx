import AboutSection from "../../components/commons/molecules/AboutSection";
import ContactSection from "../../components/commons/molecules/ContactSection";
import HeroSection from "../../components/commons/molecules/HeroSection";
import ProjectSection from "../../components/commons/molecules/ProjectSection";

const HomePage = () => {
    return (
        <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            <ContactSection />
        </div>
    )
}

export default HomePage;