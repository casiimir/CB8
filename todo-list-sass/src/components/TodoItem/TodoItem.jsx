import './index.scss'

const TodoItem = ({ todoItemData }) => {
  const { todo, completed, userId } = todoItemData

  return (
    <div className="TodoItem">
      <h3>{todo}</h3>
      <input type="checkbox" checked={completed} onChange={() => { }} />
      <span>{userId}</span>
    </div>
  )
}

export default TodoItem