import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';






const App = () => {

  return (

      <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoryId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>

      </BrowserRouter>

  );
}

export default App;