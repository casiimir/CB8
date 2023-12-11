import './index.css'

const CardItem = ({ cardItemMock }) => {
  const onHandleClick = (e) => {
    e.target.parentElement.style.color = 'red'
    e.target.parentElement.style.transform = 'rotate(259deg)'
  }

  return (
    <div className='CardItem' onClick={onHandleClick}>
      <img src={cardItemMock.imgUrl} alt={cardItemMock.title} />
      <div className='CardItem__text'>
        <h3>{cardItemMock.title}</h3>
        <p>{cardItemMock.content}</p>
      </div>
    </div>
  )
}

export default CardItem