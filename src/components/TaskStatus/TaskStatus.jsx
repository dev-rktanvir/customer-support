import React from 'react';
import TaskAction from '../TaskAction/TaskAction';

const TaskStatus = ({ title, text, alltask }) => {
    return (
        <>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>{title}</h2>
            {
                alltask?.length === 0 ?
                    <p className='text-base text-[#627382]'>{text}</p>
                    :
                    alltask?.map(task => <TaskAction
                        key={task.id}
                        task={task}
                    ></TaskAction>)
            }
        </>
    );
};

export default TaskStatus;