import React from 'react';
const EventCard = ({ item, theme }) => {

   const {details, title} = item

    // console.log(item)
    return (
        <li class="mb-4 text-lg ">
            <div class="flex flex-row items-center ">
                <div class="bg-gray-300 rounded-full h-6 w-6 "></div>
                <div class="flex flex-col mx-4 hover:bg-gray-50 border-2 rounded p-4 w-full">
                    <span style={{color:theme} }className="text-pink-400 md:text-2xl text-xl font-semibold mr-2 py-2">{title}</span>
                    <span className="md:text-xl text-sm text-gray-500">{details}</span>
                </div>
            </div>

        </li>
    );
}

export default EventCard;