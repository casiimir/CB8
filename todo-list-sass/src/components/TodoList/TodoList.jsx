import TodoItem from '../TodoItem'
import styles from './index.module.scss'

const TodoList = ({ todoListData, setTodoList }) => {
  // const reverseTodoListData = [...todoListData].reverse()

  return (
    <div className={styles.TodoList}>
      {todoListData.map(todo => <TodoItem setTodoList={setTodoList} todoItemData={todo} key={todo.id} />)}
    </div>
  )
}

export default TodoList;