
function TaskButtons({setSelection, selection}) {
    return (
        <div>
            <button className={selection === 'all' ? 'active' : ''} onClick={() => setSelection('all')}>All</button>
            <button className={selection === false ? 'active' : ''} onClick={() => setSelection(false)}>Active</button>
            <button className={selection === true ? 'active' : ''} onClick={() => setSelection(true)}>Completed</button>
        </div>
    )
}

export default TaskButtons;