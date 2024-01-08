import './index.css'

const Quote = ({ quoteContent }) => {
  const { quote, author } = quoteContent

  return (
    <div className="Quote">
      <p className='Quote--content'>{quote}</p>
      <p className='Quote--author'>{author}</p>
    </div>
  )
}

export default Quote