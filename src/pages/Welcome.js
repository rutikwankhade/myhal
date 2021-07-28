import React from 'react';
import readingImg from '../assets/reading.png'
import {Link} from 'react-router-dom'

const Welcome = () => {
    return (
        <div className=" ">
            <div className="p-20 mx-10 flex flex-row">
                <div>
                    <h1 className="leading-loose mx-4 my-8  text-4xl font-bold font-inter italic text-gray-600  ">Celebrate your small <span className="text-indigo-400">wins</span><br /> and embrace <span className="text-indigo-400">failures</span>.</h1>
                 <Link to="/signup">
                    <button className=" bg-gray-700 hover:bg-indigo-500 border-white border-2 text-white   rounded-lg p-2 px-6 text-xl  ml-4 font-bold">Get Started</button>
                </Link>
                </div>

                <img src={readingImg} alt="illustration" className=" w-1/2 ml-auto mr-2" />
            </div>

            <div className="bg-gray-50 p-40">jj</div>
        </div>
    );
}

export default Welcome;