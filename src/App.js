import './App.css';
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contenedor } from './components/ItemListContainer';
import Contador from './components/ItemCount';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contenedor/>

      <Contador/>
    </div>
  );
}

export default App;