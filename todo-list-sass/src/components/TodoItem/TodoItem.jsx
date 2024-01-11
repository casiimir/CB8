// import './index.scss';
import styles from './index.module.scss'

const TodoItem = ({ todoItemData, setTodoList }) => {
  const { id, todo, completed, userId } = todoItemData;

  const onHandleDelete = () => {
    const confirmIt = confirm("Sei sicuro di voler cancellare?")

    if (confirmIt) {
      setTodoList(prev => prev.filter(todo => todo.id !== id))
    }
  }

  return (
    <div className={`${styles.TodoItem} ${completed && styles.active}`}>
      <div className={styles.text}>
        <h3 className={styles.title}>{todo}</h3>
        <span>{userId}</span>
      </div>
      <input className={styles.checkbox} type="checkbox" checked={completed} onChange={() => { }} />
      <button onClick={onHandleDelete} className={styles.closeBtn}>X</button>
    </div>
  )
}

export default TodoItem