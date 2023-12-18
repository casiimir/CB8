import { useState } from "react"
import AddTodoInput from './components/addTodoInput'
import TodoList from './components/todoList'
import { list } from "./mocks"
import './App.css'

function App() {
  const [listData, setListData] = useState(list)
  const [isVisible, setVisibility] = useState(false)

  const onHandlePremium = () => setVisibility(true)

  return (
    <div className='App'>
      {/* Conditional Rendering */}
      {
        !isVisible && <button onClick={onHandlePremium} style={{ color: "white" }}>Passa alla versione Premium (2000E)</button>
      }
      <h1>TO-DO LIST</h1>
      {isVisible && <AddTodoInput setListData={setListData} />}
      <hr />
      <TodoList list={listData} setListData={setListData} />
    </div>
  )
}

export default App