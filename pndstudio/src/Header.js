import './Header.css';
import logo from './PNDLogo.webp'

function Header() {
  return (
    <div className="header">
      <h1>Project New Dawn Studio</h1>
      <img src={logo} alt="PND Logo" />
    </div>
      
    );
}

export default Header;
