import React from 'react';
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
import Experience from "./sections/Experience.jsx";
import { ShootingStars } from "./components/ui/shooting-stars.jsx";
import { StarsBackground } from "./components/ui/stars-background.jsx";
import { Analytics } from "@vercel/analytics/react"

const App = () => {
    return (
        <main className="max-w-7xl mx-auto relative overflow-hidden">
            <Analytics />
            {/* Background wrapper */}
            <div
                className="absolute top-0 left-0 w-full h-full z-0"
                style={{pointerEvents: 'none'}}>
                <ShootingStars/>
                <StarsBackground/>
            </div>

            {/* Main content */}
            <div className="overflow-hidden">
                <Navbar/>
                <Hero/>
                <About/>
                <Projects/>
                <Experience/>
                <Contact/>
                <Footer/>
            </div>
        </main>
    );
}

export default App;
