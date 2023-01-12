import Logo from "./Logo";
import "./Navbar.css";
import NavbarItem from "./NavbarItem";
//./--->in the same directory as this file!

//remember to export

const itemsName = ["Contacts", "About us", "Services", "Register", "Log in"];
//THIS ARRAY WE WILL USE LATER WITH THE FUNCTION map()

export default function Navbar() {
  return (
    //assigning a "className" to the header of Navbar to use it in CSS
    <>
      <header className="navbar">
        I am a Navbar
        <Logo />
        {itemsName.map((item, index) => {
          return <NavbarItem key={index} customProp={item} />;
        })}
        {/* I am not using the parameter index of the function .map() 
        for the website, but as Key for the item I am creating by the function.map()*/}
      </header>
    </>
  );
}

//IMPORTANT TIP: to import quickly--->type first 1 or 2 letters
//of the component, then wait for suggestion, choose the one you want and click!

//The import will be automatic!
