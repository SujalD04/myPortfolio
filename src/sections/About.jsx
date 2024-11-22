import Globe from 'react-globe.gl';
import React, { useState } from 'react';
import Button from "../components/Button.jsx";


const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        // Copy email to clipboard
        navigator.clipboard.writeText('sujalrdixit@gmail.com');
        setHasCopied(true);

        // Reset the copied state after 2 seconds
        setTimeout(() => {
            setHasCopied(false);
        }, 2000); // Delay in milliseconds
    };

    return (
        <section className="c-space my-20 relative" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full z-10 relative">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Hey, I'm Sujal!</p>
                            <p className="grid-subtext">
                                I am a passionate college student aspiring to become a software developer, driven by my deep interest for coding and technology.
                                My journey in Computer Science is fueled by a desire to learn, innovate, and contribute meaningfully to the tech world. On the side,
                                I enjoy playing video games, staying active through sports, and exploring the vast expanse of the internet to discover new ideas and trends.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/techstack2.png" alt="grid-2" className="w-full sm:h-[276px] h-full object-contain" />
                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in Full Stack Web Development, leveraging React.js with Tailwind CSS for responsive UIs and Node.js with Express for robust server-side applications.
                                Having used both MongoDB and PostgreSQL, I maintain flexibility across NoSQL and SQL databases.
                                I am familiar with languages like C/C++, Java, and Python.
                                Additionally, I enjoy crafting UI/UX designs using Figma and Canvas while continuously expanding my skill set.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0,0,0,0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 12.9716, lng: 77.5946,
                                    text: "I'm here!",
                                    color: "#FFD700",
                                    size: 20,
                                },]}
                                labelSize={() => 5}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                Open to work
                            </p>
                            <p className="grid-subtext">
                                Currently based in India, I'm open to work remotely and onsite.
                            </p>
                            <div>
                                <a href="#contact" className="w-fit">
                                    <Button name="Contact Me" isBeam={true} containerClass="w-full mt-10" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
                        <div>
                            <p className="grid-headtext">Development</p>
                            <p className="grid-subtext">Development is a discipline that enables me to combine technical expertise with creative problem-solving to build innovative solutions.
                                With a strong foundation in core Computer Science concepts like Data Structures, Operating Systems, and System Design,
                                I approach projects with a comprehensive understanding of efficient algorithms, resource management, and scalable architectures.
                                I am passionate about building innovative projects and continuously learning new skills.
                                I thrive on exploring emerging technologies and finding creative solutions to complex problems through code.
                                My goal is to build new things, learn new things, and have fun doing it.</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4" className="w-full sm:h-[276px] h-fit object-cover sm:object-top" />

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">Contact me</p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"} alt="copy" />
                                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                                    sujalrdixit@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
