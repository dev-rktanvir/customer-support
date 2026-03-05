import React from 'react';
import bgImg1 from '../../assets/vector1.png';
import bgImg2 from '../../assets/vector2.png';

const StatusCard = ({ title, bgClr, progressCount }) => {
    return (
        <div className={`relative overflow-hidden p-20 rounded-lg text-center ${bgClr}`}>
            <img
                src={bgImg1}
                alt=""
                className="absolute top-0 left-0 h-full"
            />

            {/* Right Image */}
            <img
                src={bgImg2}
                alt=""
                className="absolute top-0 right-0 h-full"
            />
            <div className='relative z-10'>
                <h3 className='text-2xl text-white mb-4'>{title}</h3>
                <span className='font-semibold text-6xl text-white'>{progressCount}</span>
            </div>

        </div>
    );
};

export default StatusCard;