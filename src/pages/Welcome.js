import React from 'react';
import readingImg from '../assets/hero1.png'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className=" bg-purple-100">
            <div className="p-4   flex flex-row justify-center">
                <div className="mt-20 px-4 ml-10">
                    <h1 className="leading-loose mx-4 my-8  text-4xl font-bold font-inter text-gray-600  ">Celebrate your small <span className="text-indigo-400 italic">wins</span><br /> and embrace <span className="italic text-indigo-400">failures</span>.</h1>
                 <Link to="/signup">
                    <button className=" bg-gray-700 hover:bg-indigo-500 border-white border-2 text-white transform hover:scale-105 duration-300 ease-in-out rounded-lg p-2 px-6 text-2xl  ml-4 font-semibold">Get Started</button>
                </Link>
                </div>

                <img src={readingImg} alt="illustration" className="w-6/12 " />
            </div>

            <div className="bg-gray-50 p-40">jj</div>
        </div>
    );
}

export default Welcome;