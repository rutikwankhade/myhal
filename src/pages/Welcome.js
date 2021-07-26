import React from 'react';
import readingImg from '../assets/reading.png'
import titleImg from '../assets/title.png'

const Welcome = () => {
    return (
        <div className="b-gray-50 ">
            <div className="p-20 mx-10 flex flex-row">
                <div>

                            <img src={titleImg} alt="illustration" className="shadow-xl rounded-2xl w-10/12"/>

            <h1 className="mx-4 my-8  italic text-3xl font-extrabold text-gray-600 font-mono ">Celebrate your small wins <br/> and embrace failures.</h1>
                            </div>

                    <img src={readingImg} alt="illustration" className="z-10 w-1/2 ml-auto mr-2" />

            </div>

            <div className="bg-blue-100">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="transform z-30 -translate-y-80">
  <path fill="#dcebfa" fill-opacity="1" d="M0,64L20,64C40,64,80,64,120,96C160,128,200,192,240,192C280,192,320,128,360,133.3C400,139,440,213,480,229.3C520,245,560,203,600,170.7C640,139,680,117,720,101.3C760,85,800,75,840,106.7C880,139,920,213,960,229.3C1000,245,1040,203,1080,208C1120,213,1160,267,1200,266.7C1240,267,1280,213,1320,181.3C1360,149,1400,139,1420,133.3L1440,128L1440,320L1420,320C1400,320,1360,320,1320,320C1280,320,1240,320,1200,320C1160,320,1120,320,1080,320C1040,320,1000,320,960,320C920,320,880,320,840,320C800,320,760,320,720,320C680,320,640,320,600,320C560,320,520,320,480,320C440,320,400,320,360,320C320,320,280,320,240,320C200,320,160,320,120,320C80,320,40,320,20,320L0,320Z"></path>
</svg>
                
            </div>
        </div>
     );
}
 
export default Welcome;