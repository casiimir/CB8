import { useState } from "react";
import "./index.css";

const AddTodoInput = ({ setListData }) => {
  const [inputValue, setInputValue] = useState("")

  const onInputChange = (e) => setInputValue(e.target.value)

  const onHandleSubmit = (e) => {
    e.preventDefault()

    setListData((prev) => [...prev, {
      "id": prev.length,
      "todo": inputValue,
      "completed": true,
      "userId": 26
    }])

    setInputValue("")
  }

  return (
    <form className="AddTodoInput" onSubmit={onHandleSubmit}>
      <input className="AddTodoInput__input" type="text" value={inputValue} onChange={onInputChange} placeholder="what do you want!" />
      <button className="AddTodoInput__btn" type="submit">ADD</button>
    </form>
  )
}

export default AddTodoInput