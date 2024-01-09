import { useState, useEffect } from 'react'
import TodoItem from './components/TodoItem'
import './App.scss'

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(res => res.json())
      .then(data => setTodoList(data.todos))
  }, [])

  return (
    <div className='App'>
      {/* <h1 className='title'>Salve!</h1>
      <p className='description'>Lorem ipsum dolor sit amet.</p>
      <em>Casi</em> */}
      {todoList.map(todo => <TodoItem todoItemData={todo} key={todo.id} />)}
    </div>
  )
}

export default App
