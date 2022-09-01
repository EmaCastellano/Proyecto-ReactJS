import './App.css';
import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contador from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Navbar/>

      <ItemListContainer/>
      
    </div>
  );
}

export default App;
