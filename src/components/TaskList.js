import TaskItem from "./TaskItem";

function TaskList({tasks, handleChangeStatus, handleDeleteTask, selection}) {
    return (
        <ul>
            {tasks
                .filter((e) => selection === 'all' || e.status === selection)
                .map(({id, name, status}) => <TaskItem
                    key={id}
                    id={id}
                    status={status}
                    name={name}
                    handleChangeStatus={handleChangeStatus}
                    handleDeleteTask={handleDeleteTask}
                />)}
        </ul>
    )
}

export default TaskList;