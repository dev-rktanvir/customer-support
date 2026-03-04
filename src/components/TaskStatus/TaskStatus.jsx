import React from 'react';

const TaskStatus = ({title, text}) => {
    return (
        <div>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>{title}</h2>
            <p className='text-base text-[#627382]'>{text}</p>
        </div>
    );
};

export default TaskStatus;