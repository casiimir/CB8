import CardItem from './components/cardItem/CardItem'
import './App.css'

const cardListMock = [
  {
    id: 1,
    imgUrl: 'https://picsum.photos/200/200?1',
    title: 'Pippo e Pluto',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero molestias at, doloribus laboriosam eum.'
  },
  {
    id: 2,
    imgUrl: 'https://picsum.photos/200/200?2',
    title: 'Paperina e Paperino',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero molestias at, doloribus laboriosam eum.'
  },
  {
    id: 3,
    imgUrl: 'https://picsum.photos/200/200?3',
    title: 'Topolina e Topolino',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero molestias at, doloribus laboriosam eum.'
  },
  {
    id: 4,
    imgUrl: 'https://picsum.photos/200/200?4',
    title: 'Rick e Morty',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero molestias at, doloribus laboriosam eum.'
  },
  {
    id: 5,
    imgUrl: 'https://picsum.photos/200/200?5',
    title: 'Goku e Vegeta',
    content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo libero molestias at, doloribus laboriosam eum.'
  },
]

function App() { // Componente
  return ( // JSX
    <div className='App'>
      <h1>Hello, World!</h1>
      <div className='cards-list'>
        {
          cardListMock.map(card => <CardItem cardItemMock={card} key={card.id} />)
        }
      </div>
    </div>
  )
}

export default App
