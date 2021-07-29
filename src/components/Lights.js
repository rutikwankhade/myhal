import React from 'react';
import EventCard from '../components/EventCard'
const Lights = ({ list, heading, tagline , textColor}) => {

    console.log(list, )
    return (
        <div className="h-auto">
            <div className="flex ">
                {/* <h1 className="text-4xl m-2 font-semibold">🏆 </h1> */}
                <div className="mx-auto">
                    <h1 className="text-2xl font-semibold text-center">{ heading}</h1>
                    <p className="italic text-gray-400">{ tagline}</p>
                </div>
            </div>


            <div class="relative mt-10 mx-auto ">
                <div class="border-r-4 border-gray-300  absolute h-full top-0" style={{ left: 10 }}></div>
                <ul class="list-none m-0 p-0">

                    {list && list.map(item => {
                        return <EventCard item={item} theme={textColor}/>

                    })}

                </ul>
            </div>
        </div>
    );
}

export default Lights;