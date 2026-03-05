import TaskAction from '../TaskAction/TaskAction';

const TaskStatus = ({ alltask, setAllTask, resolve, setResolve, progressCount, setProgressCount, resolveCount, setResolveCount }) => {

    return (
        <>
            <h2 className='font-semibold text-2xl text-[#34485A] mb-4'>Task Status</h2>
            {
                alltask?.length === 0 ?
                    <p className='text-base text-[#627382]'>Select a ticket to add to Task Status</p>
                    :
                    alltask?.map(task => <TaskAction
                        key={task.id}
                        task={task}
                        alltask={alltask}
                        setAllTask={setAllTask}
                        resolve={resolve}
                        setResolve={setResolve}
                        progressCount={progressCount}
                        setProgressCount={setProgressCount}
                        resolveCount={resolveCount}
                        setResolveCount={setResolveCount}
                    ></TaskAction>)
            }

        </>
    );
};

export default TaskStatus;