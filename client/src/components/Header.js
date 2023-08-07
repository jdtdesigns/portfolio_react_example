import { NavLink } from 'react-router-dom';

function Header(props) {
  const toggleMode = () => {
    props.setDarkMode(!props.darkMode);
  }

  return (
    <header className="row justify-between align-center">
      <h3>Logo</h3>


      <div onClick={toggleMode} className="toggle-bar">
        <span className={`toggle ${props.darkMode ? 'dark-mode' : ''}`}></span>
      </div>

      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header;