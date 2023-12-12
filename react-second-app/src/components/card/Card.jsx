import Button from '../button/Button'
import './index.css'

const Card = ({ cardObj }) => {
  console.log(cardObj)
  return (
    <div className='Card'>
      <img src={cardObj.img} alt={cardObj.title} />
      <div className='Card__info'>
        <Button textContent="Acquista" color="violet" />
      </div>
    </div>
  )
}

export default Card