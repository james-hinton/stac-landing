// Styles
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header">
        {/* Logo */}
        <a href="/">
          <img src="/sd_logo.png" alt="logo" className="header__logo" />
        </a>
        {/* Links */}
        <div className="header__links">
          <a href="/" className="header__link">
            Home
          </a>
          <a href="/about" className="header__link">
            About
          </a>
          <a href="/"  className="header__link">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
