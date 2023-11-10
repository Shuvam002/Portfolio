"use client"
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-12'>
            <div className='col-span-7 place-self-center text-center sm:text-left'>

                <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-blue-400 to-pink-400'> {"Hello, I'm"}</span>
                    <br />
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Shuvam',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'a Full-Stack Developer',
                            1000,
                            'an Android Developer',
                            1000,
                            'a Software Developer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>
                <p className='text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6'>Blah</p>
                <div className='relative'>
                    <button className='px-6 py-3 sm:w-fit w-full rounded-full mr-4 bg-gradient-to-br from-red-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mb-4'>Hire Me!</button>
                    <button className='px-1 py-1 sm:w-fit w-full rounded-full bg-gradient-to-br from-red-500 via-purple-500 to-pink-500  hover:bg-slate-800'>
                        <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>Download CV!</span>
                    </button>
                </div>

            </div>
            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'>
                    <Image src="/images/profile.png"
                        alt='hero image'
                        className='relative transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                        width={300}
                        height={300}

                    />
                </div>
            </div>
        </div>

    )
}

export default HeroSection