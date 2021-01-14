import Ninja from "./ninja.webp"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar/>
      <h1>Exercice 3</h1>
      <img src={Ninja} alt="Ninja"/>
    </div>
  );
}

export default App;
