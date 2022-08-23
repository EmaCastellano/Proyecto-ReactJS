import './App.css';
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Contenedor } from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Contenedor/>
    </div>
  );
}

export default App;