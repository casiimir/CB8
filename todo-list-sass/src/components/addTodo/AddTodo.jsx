import { useState } from 'react'
import styles from './index.module.scss'

const AddTodo = ({ setTodoList }) => {
  // !!!!CONTROLLED COMPONENTS!!!!
  const [inputValue, setInputValue] = useState("")

  const onHandleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onHandleSubmit = (e) => {
    const newTodo = {
      id: Math.floor(Math.random() * 999999) * new Date(),
      completed: false,
      userId: 404,
      todo: inputValue
    }

    e.preventDefault()
    setTodoList(prev => [...prev, newTodo])
  }

  return (
    <div className={styles.AddTodo}>
      {/* !!!!CONTROLLED COMPONENTS!!!! Si tratta di una FORM!!!!*/}
      <form onSubmit={onHandleSubmit} className={styles.form}>
        <input className={styles.textInput} placeholder='Add a new todo' type="text" value={inputValue} onChange={onHandleInputChange} />
        <input className={styles.submitInput} type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddTodo;