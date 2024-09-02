import React from 'react'
import heroimage from '../assets/profilepic7.png'
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[1200px] md:h-[70vh] mx-auto bg-black py-8'>
        <div className='col-span-1 my-auto mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroimage} alt='hero image'/>
        </div>

        <div className='col-span-2 px-5 my-auto'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold text-center'>
                <span className='primary-color'>
                I'm an
                </span><br/>
                <TypeAnimation
                sequence={[
                    "Aspiring SWE",
                    1000,
                    "Frontend Dev",
                    1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
                Hey, my name is Md Abrar Al Zabir, and I try to embody my GitHub username ClosetCoderSad!
            </p>

            <div className='my-8 text-center'>
                <a className='px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white' href='/Abrar Resume CV.pdf' target='_blank'>Resume</a>
                <a className='ease-in-out duration-500 px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none' href='#contact'>Contact</a>

            </div>


        </div>



    </div>
  )
}

export default Hero