import React from 'react';
import ResolveTask from '../ResolveTask/ResolveTask';

const ResolveStatus = ({ resolve, setResolve }) => {
    return (
        <div>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Resolved Task</h2>
            {
                resolve?.length === 0 ?
                    <p className='text-base text-[#627382]'>No resolved tasks yet.</p>
                    :
                    resolve?.map(p => <ResolveTask p={p}></ResolveTask>)
            }
        </div>
    );
};

export default ResolveStatus;