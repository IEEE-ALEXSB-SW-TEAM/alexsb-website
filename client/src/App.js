import "./App.css";
import Routers from "./Routers.js";
import NavBar from "./components/NavigationBar/NavigationBar.js";
import Footer from "./components/footer/footer.js";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    setTimeout(() => {
      var element = document.querySelector(".loader-container");
      if (element) element.parentNode.removeChild(element);
    }, 2000);
  });

  return (
    <div className="App">
      <NavBar />
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
