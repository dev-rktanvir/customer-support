import React, { Suspense } from 'react';
import Cards from '../Cards/Cards';
import SideBar from '../SideBar/SideBar';
import Loading from '../Loading/Loading';
const supportPromiss = async () => {
    const res = await fetch('/support.json')
    const data = res.json();
    return data;
}
const supportDatas = supportPromiss();
const CustomerTickets = ({ alltask, setAllTask, progressCount, setProgressCount, resolveCount, setResolveCount }) => {
    return (
        <div className='container mx-auto px-3 flex flex-col lg:flex-row lg:gap-8'>
            {/* cards container */}
            <div className='flex-3'>
                <Suspense fallback={<Loading></Loading>}>
                    <Cards
                        supportDatas={supportDatas}
                        alltask={alltask}
                        setAllTask={setAllTask}
                        progressCount={progressCount}
                        setProgressCount={setProgressCount}
                    ></Cards>
                </Suspense>
            </div>

            {/* side bar */}
            <div className='flex-1'>
                <SideBar
                    alltask={alltask}
                    setAllTask={setAllTask}
                    progressCount={progressCount}
                    setProgressCount={setProgressCount}
                    resolveCount={resolveCount}
                    setResolveCount={setResolveCount}
                ></SideBar>
            </div>
        </div>
    );
};

export default CustomerTickets;