import React from 'react'

const HeroSection = () => {
    return (
        <div className="bg-gray-200 lg:min-h-screen md:h-[60vh] min-h-screen flex flex-col items-center pt-8 md:py-0">
            <div className="container mx-auto flex flex-col-reverse md:flex-row items-center
             justify-center px-4 md:px-8">
                <div className="md:w-1/2 lg:w-2/3 text-center mt-[15vh]">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Upload, Save <span className='text-gray-800'>and
                        </span> <br /> Share <span className='text-gray-800'>Files Safely</span></h1>
                    <p className="text-lg md:text-xl lg:text-xl text-gray-700 mb-10">
                        Drag and drop your file directly to the cloud and share it with <br />
                        your frineds secuarly with password and can also send it on mail

                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <a
                            className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
                            href="#"
                        >
                            Get Started
                        </a>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-blue-700 focus:outline-none focus:ring active:text-primary sm:w-auto"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default HeroSection