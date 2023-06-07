import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };

  handleclick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Trippy</h1>

        <div className="menu-icons" onClick={this.handleclick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu-active" : "nav-menu"}>
          {MenuItems.map((e, i) => {
            return (
              <li key={i}>
                <Link className={e.cName} to={e.url}>
                  <i className={e.icon}></i>
                  {e.title}
                </Link>
              </li>
            );
          })}

          <button>Sign Up</button>
        </ul>
      </nav>
    );
  }
}
export default Navbar;
