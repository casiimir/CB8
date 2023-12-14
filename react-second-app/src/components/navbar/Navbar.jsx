import './index.css'

const links = [
  {
    id: 1,
    url: 'home'
  },
  {
    id: 2,
    url: 'contacts'
  },
  {
    id: 3,
    url: 'about'
  },
  {
    id: 4,
    url: 'info'
  },
]

const Navbar = () => {
  return (
    <nav className="Navbar">
      <img src="https://img.logoipsum.com/297.svg" alt="logo" />
      <ul className="Navbar__list">
        {links.map(link => <li key={link.id}>{link.url}</li>)}
      </ul>
    </nav>
  )
}

export default Navbar