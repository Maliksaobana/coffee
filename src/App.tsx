import { HeaderSection, HeroSection, Menu, Gallery, Reviews, About, Contact, Footer } from './components/exportMain.ts'


export default function App() {
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
}