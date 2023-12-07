import React from 'react'
import Image from 'next/image'

const blog = () => {
    return (
        
            <section className="container min-h-screen flex items-center mx-auto px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div
                        className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                    >
                        <div className="mb-8">
                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >70%</div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">PHP</p>
                            <p className="text-base text-gray-400 font-normal">________________________________________</p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                    >
                        <div className="mb-8">
                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >90%</div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">Java</p>
                            <p className="text-base text-gray-400 font-normal">________________________________________</p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                    >
                        <div className="mb-8">
                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >80%</div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">JavaScript</p>
                            <p className="text-base text-gray-400 font-normal">________________________________________</p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                    >
                        <div className="mb-8">
                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >60%</div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">React</p>
                            <p className="text-base text-gray-400 font-normal">________________________________________</p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                    >
                        <div className="mb-8">
                            <div className="radial-progress bg-accent text-accent-content border-4 border-accent" >70%</div>
                        </div>
                        <div className="text-center">
                            <p className="text-xl text-white font-bold mb-2">VueJS</p>
                            <p className="text-base text-gray-400 font-normal">________________________________________</p>
                        </div>
                    </div>

                    <div
                        className="w-full bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center"
                    >
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
        
    )
}

export default blog