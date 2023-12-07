'use client'
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';


export default function Home() {
  const controls1 = useAnimation();
  const [ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView1, controls1]);

  const controls2 = useAnimation();
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView2, controls2]);

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView3, controls3]);

  const controls4 = useAnimation();
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView4) {
      controls4.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView4, controls4]);

  const controls5 = useAnimation();
  const [ref5, inView5] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView5) {
      controls5.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
  }, [inView5, controls5]);

  return (
    <>
      <motion.main
        className="min-h-[70vh] md:min-h-screen relative text-white w-full h-full flex items-center justify-center md:justify-end"
        ref={ref1}
        initial={{ opacity: 0, y: 20 }}
        animate={controls1}
      >
        <div className="content absolute z-10  md:left-20 flex flex-col gap-2">
          <h5 className='text-lg text-blue-400'>For website and app development</h5>
          <h1 className='text-3xl sm:text-7xl font-bold leading-normal'>
            Web and App <br /> designer portfolio
          </h1>
          <div className="button mt-16">
            <Link href='/about' className='text-lg font-semibold p-3 rounded-md border-2 border-blue-400 hover:bg-blue-400 bg-transparent duration-500 shadow-2xl hover:shadow-none shadow-blue-300'>

              See more about us

            </Link>
          </div>
        </div>
        <div className="image relative flex justify-end">
          <Image src="/main-img.png" className="aspect-square object-contain" alt="main-image" width={800} height={800} />
        </div>
      </motion.main>

      <motion.div
        className="services px-5 text-white py-10 md:py-28 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        ref={ref2}
        initial={{ opacity: 0, y: 50 }}
        animate={controls2}
      >
        <div className="our-services flex flex-col mb-10 gap-5">
          <h5 className='text-lg'>our services</h5>
          <h2 className='text-3xl mb-3 font-medium relative '>
            what we do?
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore nostrum mollitia! Sequi eligendi, debitis eveniet reiciendis vel corporis maxime!
          </p>
          <div className="button mt-5">
            <Link href='/services' className='text-lg font-semibold p-3 rounded-md border-2 border-blue-400 hover:bg-blue-400 bg-transparent duration-500 shadow-2xl hover:shadow-none shadow-blue-300'>

              view all services

            </Link>
          </div>
        </div>
        <div className="service-providing grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-10">
          <div className="first-service flex flex-col gap-4">
            <div className="icon relative p-2 border-2 border-blue-400 rounded-md w-40 h-16">
              <Image src='/brand-identity.jpeg' className='aspect-square rounded-md p-1' alt="icon-here" layout='fill' />
            </div>
            <h4 className='text-base font-semibold'>Brand identity</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sunt! Voluptate ipsa velit necessitatibus mollitia.
            </p>
          </div>
          <div className="second-service text-right sm:text-left flex flex-col items-end sm:items-start gap-4">
            <div className="icon relative p-2 border-2 border-blue-400 rounded-md w-40 h-16">
              <Image src='/web-development.jpeg' className='aspect-square rounded-md p-1' alt="icon-here" layout='fill' />
            </div>
            <h4 className='text-base font-semibold'>Website development</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sunt! Voluptate ipsa velit necessitatibus mollitia.
            </p>
          </div>
          <div className="third-service flex flex-col gap-4">
            <div className="icon relative p-2 border-2 border-blue-400 rounded-md w-40 h-16">
              <Image src='/ui-design.jpeg' className='aspect-square rounded-md p-1' alt="icon-here" layout='fill' />
            </div>
            <h4 className='text-base font-semibold'>UI & UX design</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sunt! Voluptate ipsa velit necessitatibus mollitia.
            </p>
          </div>
          <div className="fourth-service text-right sm:text-left flex flex-col items-end sm:items-start gap-4">
            <div className="icon relative p-2 border-2 border-blue-400 rounded-md w-40 h-16">
              <Image src='/app-development.jpeg' className='aspect-square rounded-md p-1' alt="icon-here" layout='fill' />
            </div>
            <h4 className='text-base font-semibold'>App development</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, sunt! Voluptate ipsa velit necessitatibus mollitia.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="technologies px-5 text-white py-10 md:py-28 container mx-auto gap-5"
        ref={ref5}
        initial={{ opacity: 0, y: 50 }}
        animate={controls5}
      >
        <section className="container">
          <div className="mx-auto px-4">
            <div className="text-center mx-auto mb-12 lg:px-20">
              <h2 className='text-3xl mb-3 font-medium relative '>
                Tecnologies / Frameworks
              </h2>
              <p className="text-white leading-relaxed font-light mx-auto pb-2">
                Some favourite tecnologies!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <div
              className="w-full bg-gray-900 group relative overflow-hidden rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <Image src="/PHP.jpeg" className='object-cover absolute pt-80 group-hover:pt-0 duration-1000 aspect-square' alt="" layout='fill'></Image>
              <div className="mb-8 ">
                <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >70%</div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">PHP</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>

            <div
              className="w-full bg-gray-900 group relative overflow-hidden rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <Image src="/java.jpeg" className=' absolute pt-80 group-hover:pt-0 duration-1000 aspect-square' alt="" layout='fill'></Image>
              <div className="mb-8">
                <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >90%</div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">Java</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>

            <div
              className="w-full bg-gray-900 group relative overflow-hidden rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <Image src="/JavaScript.jpeg" className='object-cover absolute pt-80 group-hover:pt-0 duration-1000 aspect-square' alt="" layout='fill'></Image>
              <div className="mb-8">
                <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >80%</div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">JavaScript</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>

            <div
              className="w-full bg-gray-900 group relative overflow-hidden rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <Image src="/React.jpeg" className='object-cover absolute pt-80 group-hover:pt-0 duration-1000 aspect-square' alt="" layout='fill'></Image>
              <div className="mb-8">
                <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >60%</div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">React</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>

            <div
              className="w-full bg-gray-900 group relative overflow-hidden rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <Image src="/nextjs.jpeg" className='object-cover absolute pt-80 group-hover:pt-0 duration-1000 aspect-square' alt="" layout='fill'></Image>
              <div className="mb-8">
                <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >70%</div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">Next js</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>

            <div
              className="w-full bg-gray-900 group relative overflow-hidden rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
            >
              <Image src="/html-css.jpeg" className=' absolute pt-80 group-hover:pt-0 duration-1000 aspect-square' alt="" layout='fill'></Image>
              <div className="mb-8">
                <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >85%</div>
              </div>
              <div className="text-center">
                <p className="text-xl text-white font-bold mb-2">HTML/CSS</p>
                <p className="text-base text-gray-400 font-normal">________________________________________</p>
              </div>
            </div>
          </div>
        </section>
      </motion.div>


      <motion.div
        className="blog container mx-auto py-28 flex flex-col gap-3 text-white"
        ref={ref3}
        initial={{ opacity: 0, y: 50 }}
        animate={controls3}
      >
        <h5 className='text-lg text-center'>our blog</h5>
        <h2 className='text-3xl mb-3 text-center mx-auto font-medium relative flex justify-center  w-fit'>
          blog update
        </h2>
        <div className="cards px-5 mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          <div className="card group flex flex-col gap-5">
            <h3 className='text-2xl font-semibold'>AI in Business: Beyond the Hype</h3>
            <span className='text-gray-300'>5 minutes read</span>
            <p>
              Uncover practical applications of artificial intelligence in business, from automation to data-driven decision-making.
            </p>

          </div>
          <div className="card group flex flex-col gap-5">
            <h3 className='text-2xl font-semibold'>The Evolution of Programming Languages</h3>
            <span className='text-gray-300'>5 minutes read</span>
            <p>
              Trace the evolution of programming languages, from legacy to modern, and their impact on software development practices.
            </p>

          </div>
          <div className="card group flex flex-col gap-5">
            <h3 className='text-2xl font-semibold'>Decoding UX: Creating User-Friendly Interfaces</h3>
            <span className='text-gray-300'>5 minutes read</span>
            <p>
              Understand the principles of User Experience (UX) design and how it influences website and app usability.
            </p>

          </div>
        </div>
        <div className="button mt-16 flex justify-center">
          <Link href="/blog" className='text-lg font-semibold p-3 rounded-md border-2 border-blue-400 hover:bg-blue-400 bg-transparent duration-500 shadow-2xl hover:shadow-none shadow-blue-300'>See more</Link>
        </div>
      </motion.div>

      <motion.div
        className="start-with-us relative flex items-center text-white"
        ref={ref4}
        initial={{ opacity: 0, y: 50 }}
        animate={controls4}
      >
        <div className="content absolute px-5 md:px-16 z-10">
          <h5 className='text-lg'>best and latest options for you</h5>
          <h1 className='text-3xl sm:text-7xl font-bold leading-snug'>
            start your career <br /> with us
          </h1>
          <div className="button mt-10">
            <Link href='/contact' className='text-lg font-semibold p-3 rounded-md border-2 border-blue-400 hover-bg-blue-400 bg-transparent duration-500'>

              start with us

            </Link>
          </div>
        </div>
        <div className="img relative w-full min-h-[60vh]">
          <Image src='/carrer-1.jpeg' className='aspect-square object-cover opacity-70' alt="" layout="fill" />
        </div>
      </motion.div>
    </>
  );
}
