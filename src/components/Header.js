import logo from '../images/vector-mesto-russia.svg';

const Header = () => {
  return(
    <header className="header">
      <img src={logo} alt="Место лого" className="header__logo" />
    </header>
  )
}

export default Header;
  