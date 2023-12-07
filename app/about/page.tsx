'use client'
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
    className: string;
    id: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, className, id }) => {
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
            className={className}
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={{
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 100 },
            }}
            transition={{ duration: 0.6 }}
        >
            {children}
        </motion.div>
    );
};

const About: React.FC = () => {
    const [scrollY, setScrollY] = useState(0);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Section className="about min-h-[60vh] relative grid grid-cols-1" id="home">
                <div className="content absolute w-full h-full flex flex-col justify-center px-5 sm:px-10 text-white z-10">
                    <h5 className="text-lg ">Where <span className="text-blue-400">Innovation</span> Meets <span className="text-blue-400">Imagination.</span></h5>
                    <h1 className="text-3xl sm:text-7xl font-bold leading-normal">Welcome to <br /> <span className="text-blue-400">SK developments</span></h1>
                </div>
                <div className="img relative">
                    <Image src="/about-main.jpeg" alt="" className="opacity-90 object-cover" layout="fill"></Image>
                </div>
            </Section>

            <Section className="about-points my-10 min-h-[40vh] flex flex-col justify-center items-center text-white gap-5 md:gap-8" id="about-us">
                <h2 className="text-2xl sm:text-5xl font-semibold text-center">about <span className="text-blue-400">US</span></h2>
                <p className="px-5 sm:w-3/4 mx-auto sm:mt-5 text-justify sm:text-center">We are passionate about transforming digital dreams into reality. With a team of dedicated web developers, designers, and digital strategists, we have been crafting exceptional online experiences for our clients for [number of years] years. Our journey began with a mission to redefine web development by blending innovation and creativity into every project.</p>
            </Section>

            <Section className="our-vision container mx-auto min-h-[50vh] grid grid-cols-1 md:grid-cols-2 md:items-center text-white gap-8" id="our-vision">
                <div className="img relative w-full h-full min-h-[30vh]">
                    <Image src="/vision.jpeg" className="aspect-square object-fill" alt="" layout="fill"></Image>
                </div>
                <div className="content mx-auto flex flex-col gap-5 md:gap-8">
                    <h2 className="text-2xl sm:text-5xl mx-auto font-semibold flex items-center gap-3">Our <span className="text-blue-400">vision</span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-10 h-10 text-blue-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    </h2>
                    <ul className="text-lg px-5 text-justify flex flex-col sm:gap-3">
                        <p className="sm:mt-5">We envision a digital world where innovation knows no bounds. Our commitment to staying at the forefront of technology trends ensures that your online presence will always be cutting-edge.</p>
                    </ul>
                </div>
            </Section>

            <Section className="why-us mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-white gap-5" id="why-choose-us">
                <div className="card p-3 flex flex-col gap-8 bg-blue-500 shadow-md shadow-blue-300 md:col-span-1 order-3 md:order-1 lg:order-1">
                    <div className="icon relative">
                        <Image src='' className='aspect-square' alt='' layout='fill'></Image>
                    </div>
                    <h3 className='text-3xl font-medium'>Expertise</h3>
                    <p>Our team comprises skilled developers and designers with a wealth of experience.</p>
                </div>
                <div className="image min-h-[30vh] relative flex flex-col gap-8 lg:row-span-2 sm:col-span-2 shadow-md shadow-amber-300 md:order-3">
                    <Image src="/choose-us.jpeg" className='aspect-square' alt='' layout='fill'></Image>
                </div>
                <div className="why-heading p-3 text-center md:text-right flex flex-col gap-8 bg-pink-500 sm:col-span-2 shadow-md shadow-pink-300">
                    <h2 className='text-6xl font-light'>Why <br /> <span className="text-blue-400 font-semibold">Choose</span> <br /> <span className="text-blue-400 font-semibold">US ?</span></h2>
                    <p className='text-justify md:text-right'>Coding your success story with a dedicated team, innovative solutions, and a client-centric approach, we ensure timely, high-quality results that speak for themselves.</p>
                </div>
                <div className="card p-3 flex flex-col gap-8 bg-pink-500 shadow-md shadow-pink-300 md:order-6">
                    <div className="icon relative">
                        <Image src='' className='aspect-square' alt='' layout='fill'></Image>
                    </div>
                    <h3 className='text-3xl font-medium'>Custom <br /> Solutions</h3>
                    <p>We create tailored solutions to meet your unique needs.</p>
                </div>
                <div className="card p-3 flex flex-col gap-8 bg-purple-500 shadow-md shadow-purple-300 md:order-7">
                    <div className="icon relative">
                        <Image src='' className='aspect-square' alt='' layout='fill'></Image>
                    </div>
                    <h3 className='text-3xl font-medium'>Creative <br /> Excellence</h3>
                    <p>Our designs are visually stunning and user-friendly.</p>
                </div>
                <div className="card p-3 flex flex-col gap-8 bg-blue-500 shadow-md shadow-blue-300 md:order-8">
                    <div className="icon relative">
                        <Image src='' className='aspect-square' alt='' layout='fill'></Image>
                    </div>
                    <h3 className='text-3xl font-medium'>Timely <br /> Delivery</h3>
                    <p>We adhere to deadlines, ensuring your project is completed on time.</p>
                </div>
            </Section>
        </>
    );
};

export default About;
