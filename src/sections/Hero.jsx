import React, { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei';
import CanvasLoader from "../components/CanvasLoader.jsx";
import HackerRoom from "../components/HackerRoom.jsx";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Ring from "../components/Ring.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import FlipWords from "../components/ui/flip-words.jsx";

const wordsToFlip = ["Student", "Web Developer", "Graphic Designer"];

const Hero = () => {
    // Define the RealTimeDate component
    const RealTimeDate = () => {
        const [currentDate, setCurrentDate] = useState(new Date().toLocaleString());

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentDate(new Date().toLocaleString());
            }, 1000); // Update every second

            return () => clearInterval(interval); // Cleanup on unmount
        }, []);

        return <p className="sm:text-xl text-lg font-medium text-white text-center font-generalsans">
            {currentDate}
        </p>;
    };

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isLargeScreen = useMediaQuery({ minWidth: 1025 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <Button
                name={<RealTimeDate />}
                isBeam={true}
                containerClass="sm:w-fit w-full sm:min-w-96 mt-[-25px]"
                />
                <p className="sm:text-4xl text-xl font-medium text-white text-center font-generalsans">
                    Hey there! I'm Sujal, and I'm a
                </p>
                <p className="text-5xl font-semibold text-white text-center font-generalsans">
                    <FlipWords words={wordsToFlip} duration={3000} className="my-custom-class" />
                </p>
            </div>

            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                position={sizes.deskPosition}
                                rotation={[-6.0, -3.1, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>
                        {/*<group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Ring position={sizes.ringPosition} />
                        </group>*/}
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>
            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button
                        name="Let's connect"
                        isBeam={true}
                        containerClass="sm:w-fit w-full sm:min-w-96"
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;
