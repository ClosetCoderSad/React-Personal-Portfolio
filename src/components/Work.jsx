import React from 'react'
import proj1 from '../assets/project1.jpeg'
import proj2 from '../assets/project2.jpeg'
import proj3 from '../assets/project3.jpeg'
import proj4 from '../assets/project4.jpeg'
import proj5 from '../assets/Project.jpeg'
import proj6 from '../assets/project6.jpeg'

const Work = () => {
  return (
    <div className='max-w-[1200px] mx-auto p-5' id='work'>
        <div className='pb-8'>
            <p className='text-4xl mb-3 font-bold primary-color'>Work</p>
            <p className='text-gray-400'>Check out some of my recent work</p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={proj1} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/ClosetCoderSad/Airbnb-Clone' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Airbnb Clone
                            </button>
                        
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={proj2} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/ClosetCoderSad/Tell_Me_ZaWeather' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Weather App
                            </button>
                        
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={proj3} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/ClosetCoderSad/AI_Assistant_Mouse' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                AI Assistant Mouse
                            </button>
                        
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={proj4} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/ClosetCoderSad/Tic-Tac-Toe-Game' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Tic Tac Toe
                            </button>
                        
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={proj5} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/ClosetCoderSad/EVyota' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                EVYota
                            </button>
                        
                        </a>
                    </div>
                </div>
            </div>

            <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden 
                            shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center 
                            mx-auto content-div h-[200px] bg-cover relative'>
                <img src={proj6} alt=''/>
                <div className='opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center'>
                    <span className='text-2xl font-bold text-white tracking-wider'></span>
                    <div className='pt-8 text-center'>
                        <a href='https://github.com/ClosetCoderSad/Personal-Website' target='_blank'>
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                Personal Portfolio v1
                            </button>
                        
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Work
