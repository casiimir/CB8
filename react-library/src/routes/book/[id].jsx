import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './index.module.scss'
import { HTTP_GET } from '../../utils/http'
import { Link } from 'react-router-dom'

export default function Book() {
  const { bookId } = useParams()
  const [bookInfo, setBookInfo] = useState({})

  useEffect(() => {
    HTTP_GET(`/search.json?q=${bookId.replaceAll(' ', '+')}`)
      .then(data => setBookInfo(data.docs[0]))
  }, [bookId])

  return (
    <div className={styles.Book}>
      <Link to="/">Back to Home</Link>
      {
        bookInfo?.isbn && <>
          {console.log(bookInfo)}
          <img className={styles.image} src={`https://covers.openlibrary.org/b/id/${bookInfo.cover_i}-M.jpg`} alt={bookInfo?.title} />
          <h1>{bookInfo?.title}</h1>
          <h3>{bookInfo?.author_name}</h3>
          <span>{bookInfo?.ratings_count}</span>
          <h4>What's it about?</h4>
          <p>{bookInfo?.first_sentence[0]}</p>
        </>
      }
    </div>
  )
}
