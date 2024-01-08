import { useState, useEffect } from 'react'
import QuoteList from '../quoteList'
import './index.css'

const App = () => {
  const [quoteListData, setQuoteListData] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/quotes')
      .then(res => res.json())
      .then(data => setQuoteListData(data.quotes))
  }, [])


  return (
    <div className="App">
      <QuoteList quoteList={quoteListData} title="Quotes list" />
    </div>
  )
}

export default App