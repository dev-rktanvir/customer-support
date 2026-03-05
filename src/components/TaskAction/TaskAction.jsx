import React from 'react';

const TaskAction = ({ task, alltask, setAllTask, resolve, setResolve, progressCount, setProgressCount, resolveCount, setResolveCount }) => {
    const handleComplete = (completed) => {
        const remainingTasks = alltask.filter(t => t.id !== task.id);
        setAllTask(remainingTasks);

        const newResolve = [...resolve, completed];
        setResolve(newResolve);

        setProgressCount(progressCount - 1);
        
        setResolveCount(resolveCount + 1);

    }
    return (
        <div className='p-4 bg-white rounded-sm shadow-md mb-5'>
            <h3 className='font-medium text-lg text-black mb-4'>{task.title}</h3>
            <button onClick={() => handleComplete(task)} className='bg-[#02A53B] px-4 py-3 rounded-sm w-full font-semibold text-base text-white cursor-pointer'>Complete</button>
        </div>
    );
};

export default TaskAction;