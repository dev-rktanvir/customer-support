import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';

const SideBar = ({ alltask }) => {
    return (
        <div className='flex flex-col gap-10 pb-5'>
            <div>
                <TaskStatus
                    title="Task Status"
                    text="Select a ticket to add to Task Status"
                    alltask={alltask}
                ></TaskStatus>
            </div>
            <div>
                <TaskStatus
                    title="Resolved Task"
                    text="No resolved tasks yet."
                ></TaskStatus>
            </div>
        </div>
    );
};

export default SideBar;