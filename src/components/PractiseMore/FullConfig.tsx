import HeaderSection from "./HeaderSection.tsx";
import HeroSection from "./HeroSection.tsx";
import Footer from "./otherPages/Footer.tsx";
import Contact from "./otherPages/Contact.tsx";
import About from "./otherPages/About.tsx";
import Reviews from "./otherPages/Reviews.tsx";
import Gallery from "./otherPages/Gallery.tsx";
import Menu from "./otherPages/Menu.tsx";

const FullConfig = () => {
    return (
        <main className="flex flex-col flex-nowrap min-h-screen relative overflow-x-hidden">
            {/*note at screen 1180 nav bar has an issue check and fix*/}
            <HeaderSection />
            <HeroSection id='home' />
            <Menu id='menu' />
            <Gallery id='gallery' />
            <Reviews id='reviews' />
            <About id='about' />
            <Contact id='contact' />
            <Footer />
        </main>
    );
};

export default FullConfig;