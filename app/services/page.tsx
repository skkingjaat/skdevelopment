'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedSectionProps {
    children: React.ReactNode;
    id: string;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, id }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <motion.div
            id={id}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 50 },
            }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

const ServicePage = () => {
    return (
        <>
            <AnimatedSection id="home">
                <div className="main relative min-h-[80vh] flex items-center w-full">
                    <Image src="/services-main-bg.jpeg" className='opacity-80 object-cover' alt="" layout='fill' />
                    <div className="content absolute z-10 left-5 sm:left-20 flex flex-col gap-2 text-white">
                        <h5 className='text-lg text-blue-400'>website and app development</h5>
                        <h1 className='text-3xl sm:text-7xl font-bold leading-normal'>Welcome to <br />our services</h1>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection id="services-offered">
                <div className="services-offered text-center space-y-12 min-h-[20vh] flex justify-center items-center">
                    <h2 className="text-center text-2xl sm:text-5xl font-bold text-white">
                        Services offered
                        <div className="relative pl-3 inline-grid grid-cols-1 grid-rows-1 gap-12 overflow-hidden text-blue-400">
                            <span className="animate-word col-span-full row-span-full">Flutter</span>
                            <span className="animate-word-delay-1 col-span-full row-span-full">Nodejs</span>
                            <span className="animate-word-delay-2 col-span-full row-span-full">Php</span>
                            <span className="animate-word-delay-3 col-span-full row-span-full">VueJS</span>
                            <span className="animate-word-delay-4 col-span-full row-span-full">NextJS</span>
                        </div>
                    </h2>
                </div>
            </AnimatedSection>

            <AnimatedSection id="frontend">
                <div className="frontend px-5 container mx-auto min-h-[50vh] grid grid-cols-1 md:grid-cols-2 md:items-center text-white">
                    <div className="img relative w-full h-full min-h-[30vh]">
                        <Image src="/front-end.jpeg" className='aspect-square' alt='' layout='fill' />
                    </div>
                    <div className="content px-5 my-10 sm:my-0 mx-auto flex flex-col gap-8">
                        <h2 className='text-2xl sm:text-5xl font-semibold'><span className="text-blue-400">Front-End</span> Development</h2>
                        <ul className="text-lg flex flex-col gap-3">
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>HTML, CSS, and JavaScript development</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>User interface (UI) design and development</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>Responsive web design</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>Front-end frameworks and libraries (e.g., React, Angular, Vue.js)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection id="backend">
                <div className="backend px-5 container mx-auto min-h-[50vh] grid grid-cols-1 md:grid-cols-2 md:items-center text-white">
                    <div className="img relative w-full h-full min-h-[30vh] order-1 md:order-2">
                        <Image src="/back-end-development.jpeg" alt='' layout='fill' />
                    </div>
                    <div className="content px-5 my-10 sm:my-0 mx-auto flex flex-col gap-8 order-2 md:order-1">
                        <h2 className='text-2xl sm:text-5xl font-semibold'><span className="text-blue-400">Back-End</span> Development</h2>
                        <ul className="text-lg flex flex-col gap-3">
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>Server-side programming (e.g., Node.js, Python, Ruby, PHP)</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>Database design and management (SQL and NoSQL databases)</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>RESTful and GraphQL APIs</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i> <span>Server and application deployment</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection id="app-development">
                <div className="app-development px-5 container mx-auto min-h-[50vh] grid grid-cols-1 md:grid-cols-2 md:items-center text-white">
                    <div className="img relative w-full h-full min-h-[30vh]">
                        <Image src="/app-development-service.jpeg" alt='' layout='fill' />
                    </div>
                    <div className="content px-5 my-10 sm:my-0 mx-auto flex flex-col gap-8">
                        <h2 className='text-2xl sm:text-5xl font-semibold'><span className="text-blue-400">App</span> Development</h2>
                        <ul className="text-lg flex flex-col gap-3">
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i>
                                <span>Mobile-responsive design</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i>
                                <span>Progressive web apps (PWAs)</span>
                            </li>
                            <li className='flex items-center gap-3'><i className="fa-solid fa-arrow-right"></i>
                                <span>Mobile app development for Android and iOS</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </AnimatedSection>
        </>
    );
};

export default ServicePage;
