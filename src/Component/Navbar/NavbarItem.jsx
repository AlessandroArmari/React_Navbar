import "./Navbar.css";

export default function NavbarItem(props) {
  return <div className="navbar__item">{props.customProp}</div>;
}

//navbarItem has a props= "customProp"
