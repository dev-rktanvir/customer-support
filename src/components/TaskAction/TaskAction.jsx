import React from 'react';

const TaskAction = () => {
    return (
        <div className='p-4 bg-white rounded-sm shadow-md'>
            <h3 className='font-medium text-lg text-black mb-4'>Payment Failed - Card Declined</h3>
            <button className='bg-[#02A53B] px-4 py-3 rounded-sm w-full font-semibold text-base text-white cursor-pointer'>Complete</button>
        </div>
    );
};

export default TaskAction;