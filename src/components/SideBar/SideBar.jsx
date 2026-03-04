import React from 'react';
import TaskStatus from '../TaskStatus/TaskStatus';

const SideBar = () => {
    return (
        <div className='flex flex-col gap-10 pb-5'>
            <TaskStatus
                title="Task Status"
                text="Select a ticket to add to Task Status"
            ></TaskStatus>
            <TaskStatus
                title="Resolved Task"
                text="No resolved tasks yet."
            ></TaskStatus>
        </div>
    );
};

export default SideBar;