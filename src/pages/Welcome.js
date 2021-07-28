import React from 'react';
import readingImg from '../assets/reading.png'

const Welcome = () => {
    return (
        <div className=" ">
            <div className="p-20 mx-10 flex flex-row">
                <div>
                    <h1 className="mx-4 my-8  text-4xl font-bold italic text-gray-600  ">Celebrate your small <span className="text-indigo-400">wins</span><br /> and embrace <span className="text-indigo-400">failures</span>.</h1>
                </div>

                <img src={readingImg} alt="illustration" className=" w-1/2 ml-auto mr-2" />
            </div>

            <div className="bg-gray-50 p-40">jj</div>
        </div>
    );
}

export default Welcome;