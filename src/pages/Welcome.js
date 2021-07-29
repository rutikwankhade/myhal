import React from 'react';
import readingImg from '../assets/hero1.png'
import hero2 from '../assets/Saly-18.png'

import demoImg from '../assets/demo.png'

import { Link } from 'react-router-dom'

import Fade from 'react-reveal/Fade';


const Welcome = () => {
    return (
        <div className=" bg-purple-100">
            <Fade bottom>

                <div className="p-4 flex md:flex-row flex-col justify-center">

                    <div className="md:mt-28 px-4 md:ml-10">
                        <h1 className="leading-loose mx-4 my-8  md:text-4xl text-xl font-bold font-inter text-gray-600  ">Celebrate your small <span className="text-indigo-400">wins</span><br /> and embrace <span className=" text-indigo-400">failures</span>.</h1>
                        <Link to="/signup">
                            <button className=" bg-gray-700 hover:bg-indigo-500 border-white border-2 text-white transform hover:scale-105 duration-300 ease-in-out rounded-lg p-2 px-6 md:text-2xl  ml-4 font-semibold">Get Started</button>
                        </Link>
                    </div>


                    <img src={readingImg} alt="illustration" className="md:w-6/12 " />
                </div>
            </Fade>




            <img src={demoImg} alt="illustration" className="w-10/12 mx-auto transform md:-translate-y-60 " />



            <div className="flex md:flex-row flex-col-reverse justify-center">
                <img src={hero2} alt="illustration" className="md:w-6/12 " />

                <div className="font-inter  md:w-1/2 p-10 mx-auto transform md:-translate-y-40">
                    <Fade right>

                        <h1 className="md:text-4xl text-3xl py-4 font-bold text-gray-700">How does it work?</h1>

                        <div className="flex my-2">
                            <div className="transform hover:scale-105 duration-300 ease-in-out w-20 h-20 cursor-pointer flex flex-col justify-center items-center  m-2 bg-white rounded-xl border-2 border-gray-600 p-4">
                                <span className="text-4xl">✨</span>
                            </div>

                            <p className="md:w-1/2 m-2 text-xl text-gray-700 font-semibold"><span className="text-indigo-400 font-bold">Highlights </span>is the list of small wins that you are proud of throughout your journey. Celebrate them. </p>
                        </div>

                        <div className="flex my-2">
                            <div className="transform hover:scale-105 duration-300 ease-in-out w-20 h-20 cursor-pointer flex flex-col justify-center items-center  m-2 bg-white rounded-xl border-2 border-gray-600 p-4">
                                <span className="text-4xl">🌊</span>
                            </div>

                            <p className="md:w-1/2 m-2 text-xl text-gray-700 font-semibold"><span className="text-pink-400 font-bold">Lowlights </span>is the list of moments when you failed, learned and grew up. Embrace them.</p>
                        </div>
                    </Fade>

                    <Fade right>

                        <h1 className="text-3xl mt-20 py-4 font-bold text-gray-700">Why create one?</h1>
                        <p className="md:w-2/3 m-2 text-2xl text-gray-700 font-semibold">Documenting and sharing your highs and lows will work as a motivation to keep going. And help you see your progress.</p>
                        <Link to="/signup">
                            <button className=" bg-indigo-400 hover:bg-indigo-500 border-white border-2 text-white transform hover:scale-105 duration-300 ease-in-out rounded-lg p-2 px-6 text-2xl  my-4 font-semibold">Let's do this.</button>
                        </Link>
                    </Fade>

                </div>
            </div>

            {/* <div className="bg-gray-50 p-40 transform -translate-y-80 w-1/2 ml-auto mr-20">jj</div> */}

            <footer className="text-center bg-white p-6 ">
                <span className="text-gray-400">
                    Made with ❤ by <a href="https://rutikwankhade.dev" target="_blank" rel="noreferrer" className="text-purple-300 font-semibold">Rutik Wankhade</a>
                </span>
            </footer>
        </div>
    );
}

export default Welcome;