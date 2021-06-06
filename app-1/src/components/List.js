import Todo from './Todo';

export default function List(props) {
    const mapTaskList = props.taskList.map((task, idx) => <Todo task={task} key={idx} />)

    return (
        <div className="task-list">
            { mapTaskList}
        </div>
    )
}