"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="app">
        <nav>
          <div className="max-w-7xl mx-auto">
            <div className="flex mx-auto justify-between w-5/6 ">
              <div className="flex items-center gap-16 mt-8 mb-4">
                <div>
                  <a
                    href="/"
                    className="flex gap-2 items-center ">
                    <Image src='/logo.svg' height={35} width={40}/>
                    <span className='text-primary font-extrabold md:text-xl text-lg'>Ease Share</span>
                  </a>
                </div>

                <div className="hidden lg:flex gap-8 ">
                  <a href="#" className='hover:underline'>Home</a>
                  <a href="uploads" className='hover:underline'>Upload</a>
                  <a href="#" className='hover:underline'>About Us</a>
                  <a href="#" className='hover:underline'>Contact Us</a>
                </div>
              </div>
              <div className="flex gap-6 justify-center items-center">
                  <div>
                  <a className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white
                                shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-primary sm:w-auto"
                    href="#">
                            Get Started
                        </a>
                  </div>
                
                <div className="lg:hidden flex items-center">
                  <button onClick={() => setToggleMenu(!toggleMenu)}>
                  <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* mobile navigation */}
          <div
            className={`fixed z-40 w-full  bg-gray-100 overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
              !toggleMenu ? "h-0" : "h-full"
            }`}
          >
            <div className="px-8">
              <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a href="#">Home</a>
                  <a href="#">Upload</a>
                  <a href="#">About Us</a>
                  <a href="#">Contact Us</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    )
}

export default Header