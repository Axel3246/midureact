import './App.css';
import Mensaje from './Mensaje.js'

const Description = () => {
  return <p> Esta es la app del curso fullstack bootcamp</p>
}
const App = () => {
  return (
    <div className="App">
      <Mensaje kolor = 'red' message = 'Estamos trabajando ' />
      <Mensaje kolor = 'blue' message = 'en un curso'/>
      <Mensaje kolor = 'yellow' message = ' de React'/>
      <Description />
    </div>
  );
}

export default App;
