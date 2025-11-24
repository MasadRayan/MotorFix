import React from 'react';
import { FaRobot } from "react-icons/fa6";

const Chatbot = () => {
    return (
        <div className='cursor-pointer bg-red-500 text-white px-4 py-4 rounded-full'>
            <FaRobot size={30}/>
        </div>
    );
};

export default Chatbot;