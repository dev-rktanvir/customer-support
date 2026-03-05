import React, { useState } from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';
import ResolveStatus from '../ResolveStatus/ResolveStatus';

const SideBar = ({ alltask, setAllTask, progressCount, setProgressCount, resolveCount, setResolveCount }) => {
    const [resolve, setResolve] = useState([]);
    return (
        <div className='flex flex-col gap-10 pb-5'>
            <div>
                <TaskStatus
                    alltask={alltask}
                    setAllTask={setAllTask}
                    resolve={resolve}
                    setResolve={setResolve}
                    progressCount={progressCount}
                    setProgressCount={setProgressCount}
                    resolveCount={resolveCount}
                    setResolveCount={setResolveCount}
                ></TaskStatus>
            </div>
            <div>
                <ResolveStatus
                    resolve={resolve}
                    setResolve={setResolve}
                ></ResolveStatus>
            </div>
        </div>
    );
};

export default SideBar;