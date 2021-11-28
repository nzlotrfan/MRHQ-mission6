import logo from "../assets/Datacom-Primary-Logo-RGB.svg";
import "./Header.css";

const Header = () => {
  // /* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  };

  return (
    <div id="navbar" className="header-container">
      <div className="header-content-container">
        <div className="header-left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header-middle">
          <a href="#" className="header-links">
            Solutions
          </a>
          <a href="#" className="header-links">
            Industries
          </a>
          <a href="#" className="header-links">
            Discover
          </a>
          <a href="#" className="header-links">
            About us
          </a>
          <a href="#" className="header-links">
            Careers
          </a>
        </div>
        <div className="header-right">
          <button className="login-btn">Sign in</button>
          <i class="fa fa-search fa-lg search"></i>
        </div>
      </div>
    </div>
  );
};
export default Header;
