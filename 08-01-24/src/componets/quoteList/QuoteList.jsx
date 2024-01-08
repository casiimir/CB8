import Quote from '../quote/Quote'
import './index.css'


const QuoteList = ({ quoteList, title }) => {
  return (
    <div className="QuoteList">
      <h2>{title}</h2>
      {
        quoteList.map(quote => <Quote quoteContent={quote} key={quote.id} />)
      }
    </div>
  )
}

export default QuoteList