import './index.css'

const Footer = () => {
  return (
    <footer className='Footer'>
      <ul className="Footer__list">
        <li>
          <img src="https://img.icons8.com/ios/50/cottage--v1.png" alt="Shop" />
          <p>Home</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/50/shopping-bag--v1.png"
            alt="Shop"
          />
          <p>Shop</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/50/film-reel--v1.png"
            alt="Coming Soon"
          />
          <p>Coming Soon</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/50/smiling.png"
            alt="Fast Laughs"
          />
          <p>Fast Laughs</p>
        </li>
        <li>
          <img
            src="https://img.icons8.com/ios/50/download--v1.png"
            alt="Downloads"
          />
          <p>Downloads</p>
        </li>
      </ul>
    </footer>
  )
}

export default Footer