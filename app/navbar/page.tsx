'use client'
import React from 'react';
import { Disclosure, } from '@headlessui/react';
import Link from 'next/link';

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact' },

];

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="">
            {({ open }) => (
                <>
                    <div className="lg:container w-full mx-auto fixed left-1/2 -translate-x-1/2 top-3 z-[999] lg:flex items-center justify-between p-2 text-white backdrop-blur-md">
                        <div className="relative w-full flex items-center justify-between">
                            <div className="menu w-full flex items-center justify-between gap-5">
                                <div className="flex logo items-center">
                                    <div className='brand'>
                                        <Link href="/" className="logo relative font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white p-2 rounded-sm">
                                            SK developments
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden lg:ml-6 lg:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                href={item.href}
                                                className={classNames(
                                                    'text-white hover:text-blue-300 active:text-blue-400',
                                                    'px-3 py-2 text-sm xl:text-base font-medium',
                                                )}
                                                aria-current={item.name === 'Home' ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="relative hamburger text-white flex items-center lg:hidden">
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 ">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>


                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                        </svg>

                                    )}
                                </Disclosure.Button>
                            </div>

                        </div>
                        <Disclosure.Panel className="lg:hidden sticky w-full lg:container z-[995] mx-auto pb-8 sm:px-8  text-white">
                            <div className="space-y-1 w-full text-white px-2 pb-3 backdrop-blur-sm backdrop-brightness-90">
                                {navigation.map((data) => (
                                    <Disclosure.Button
                                        as="a"
                                        href={data.href}
                                        className={classNames(
                                            data.name === 'Home' ? '' : 'text-white',
                                            'block  px-3 py-2 text-base text-white font-medium hover:text-blue-300 active:text-blue-400'
                                        )}
                                        aria-current={data.name === 'Home' ? 'page' : undefined}
                                    >
                                        {data.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </div>

                </>
            )}
        </Disclosure>
    );
}
