import React from 'react';
const EventCard = () => {
    return (
         <li class="mb-4 text-lg ">
                            <div class="flex flex-row items-center ">
                                <div class="bg-gray-300 rounded-full h-6 w-6 "></div>
                                <div class="flex flex-col mx-4 hover:bg-gray-50 border-2 rounded p-4 w-full">
                                    <span className="text-pink-400 text-2xl font-semibold mr-2 py-2">Jan 2020</span>
                                    <span className="text-xl text-gray-500">My side project got featured on profucthunt</span>
                                </div>
                            </div>

                        </li>
     );
}
 
export default EventCard;