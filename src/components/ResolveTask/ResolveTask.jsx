import React from 'react';

const ResolveTask = ({p}) => {
    return (
        <div className='rounded-sm px-4 py-5 bg-[#E0E7FF] mb-5'>
            <h3 className='font-medium text-lg text-black'>{p.title}</h3>
        </div>
    );
};

export default ResolveTask;