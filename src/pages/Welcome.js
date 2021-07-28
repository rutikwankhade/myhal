import React from 'react';
import readingImg from '../assets/reading.png'

const Welcome = () => {
    return (
        <div className="b-gray-50 ">
            <div className="p-20 mx-10 flex flex-row">
                <div>
                    <h1 className="mx-4 my-8  italic text-4xl font-extrabold text-gray-600 font-mono ">Celebrate your small wins <br /> and embrace failures.</h1>
                </div>

                <img src={readingImg} alt="illustration" className=" w-1/2 ml-auto mr-2" />
            </div>
        </div>
    );
}

export default Welcome;