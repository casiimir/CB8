import Card from '../card/Card'
import './index.css'

const CardList = ({ cardListObj }) => {
  return (
    <div className='CardList'>
      <h2>{cardListObj.title}</h2>
      <div className='CardList__items'>
        {
          cardListObj.list.map(image => <Card cardObj={image} key={image.id} />)
        }
      </div>
    </div>
  )
}

export default CardList