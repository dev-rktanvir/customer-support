import React, { Suspense } from 'react';
import Cards from '../Cards/Cards';
import SideBar from '../SideBar/SideBar';
import Loading from '../Loading/Loading';
const supportPromiss = async () => {
    const res = await fetch('/support.json')
    const data = res.json();
    return data;
}

const CustomerTickets = () => {
    const supportDatas = supportPromiss();
    return (
        <div className='container mx-auto px-3 flex flex-col lg:flex-row lg:gap-8'>
            {/* Left side */}
            <div className='flex-3'>
                <Suspense fallback={<Loading></Loading>}>
                    <Cards supportDatas={supportDatas}></Cards>
                </Suspense>
            </div>

            {/* Right side */}
            <div className='flex-1'>
                <SideBar></SideBar>
            </div>
        </div>
    );
};

export default CustomerTickets;