import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const page = () => {
    return (
        <>
            <div className="relative flex items-top justify-center h-full min-h-[120vh] md:min-h-screen sm:items-center">
                <div className="container sm:max-w-6xl mx-auto sm:px-6 lg:px-8 absolute z-10">
                    <div className="mt-20 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <div className="p-6 sm:w-[60vw] md:mr-2 bg-gray-800 sm:rounded-lg">
                                <h1 className="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                                    <span className="text-blue-400">Get</span> in touch
                                </h1>
                                <p className="text-normal text-lg font-medium text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div className="flex items-center mt-6 text-blue-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-blue-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-48">
                                        near sector 40 gurugram, rajasthan.
                                    </div>
                                </div>

                                <div className="flex items-center mt-6 text-blue-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-blue-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        <Link href="tel:7458600798">
                                        +91 7458600798
                                        </Link>
                                    </div>
                                </div>

                                <div className="flex items-center mt-6 text-blue-500">
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-blue-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                        <Link href="mailto:skdevelopments.org">
                                            skdevelopments.org
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <form action="mailto:skdevelopmentsofficial@gmail.com" className="p-6 flex flex-col justify-center text-white gap-3">
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input type="name" required name="name" id="name" placeholder="Full Name" className="w-100 mt-2 py-3 px-3 placeholder:text-white rounded-lg bg-blue-500 border font-semibold focus:border-blue-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input type="email" required name="email" id="email" placeholder="Email" className="w-100 mt-2 py-3 px-3 placeholder:text-white rounded-lg bg-blue-500 border font-semibold focus:border-blue-500 focus:outline-none" />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="tel" className="hidden">Number</label>
                                    <input type="number" required minLength={10} maxLength={10} min={1} name="tel" id="tel" placeholder="Mobile Number" className="w-100 mt-2 py-3 px-3 placeholder:text-white rounded-lg bg-blue-500 border font-semibold focus:border-blue-500 focus:outline-none" />
                                </div>

                                <button type="submit" className='w-fit mt-6 text-lg font-semibold px-8 py-3 rounded-md border-2 border-blue-400 hover:bg-blue-400 bg-transparent duration-500 shadow-2xl hover:shadow-none shadow-blue-300'>
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <Image src="/contact-us-bg.jpeg" className='object-cover aspect-square' alt="" layout='fill'></Image>
            </div>
            
        </>
    )
}

export default page