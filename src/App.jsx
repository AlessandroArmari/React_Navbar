import CustomComponent from "./Component/CustomComponent";
import Navbar from "./Component/Navbar/Navbar";

//I import "CustomComponent" and "Navbar" from the folder Component

function App() {
  // <CustomComponent /> ---> is stored in the folder Component

  return (
    <>
      <Navbar />
      <CustomComponent props={"...and I am a props of Custom Component"} />
      {/*I declared the parameter/props of CustomComponent */}

      <div>I am "standard" Html code inside a 'div'</div>

      <div>Bottom</div>
    </>
  );
}

export default App;
