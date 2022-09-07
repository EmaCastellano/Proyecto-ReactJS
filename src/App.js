import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import MemoriasRAM from './components/MemoriasRAM/MemoriasRAM';
import Discos from './components/Discos/Discos';
import Perifericos from './components/Perifericos/Perifericos';






const App = () => {

  return (

      <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={ <Navigate to="/"/>} />

            <Route path='/productos/:categoryRAM' element={<MemoriasRAM/>} />
            <Route path='/productos/:categoryDiscos' element={<Discos/>} />
            <Route path='/productos/:categoryPerifericos' element={<Perifericos/>} />
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>

      </BrowserRouter>

  );
}

export default App;