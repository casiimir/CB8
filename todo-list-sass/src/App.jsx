import { useState, useEffect } from 'react'
import styles from './App.module.scss'
import TodoList from './components/TodoList/TodoList'
import AddTodo from './components/addTodo/AddTodo'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTodoList(data.todos))
  }, [])

  return (
    <div className={styles.App}>
      <AddTodo setTodoList={setTodoList} />
      <TodoList todoListData={todoList} setTodoList={setTodoList} />
    </div>
  )
}

export default App
