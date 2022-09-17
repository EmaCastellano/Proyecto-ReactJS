import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import { CartProvider } from './components/Context/CartContext';
import Cart from './components/Cart/Cart';







const App = () => {

  return (

    <CartProvider>

      <BrowserRouter>

        <Navbar/>

          <Routes>
            <Route path='/' element={ <ItemListContainer/> }/>
            <Route path='/productos/:categoriaId' element={<ItemListContainer/>} />
            <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
            <Route path='*' element={ <Navigate to="/"/>} />
            
            <Route path='/cart' element={<Cart/>}/>
            
            <Route path='*' element={ <Navigate to="/"/>} />
          </Routes>

        <Footer/>
        
      </BrowserRouter>

      </CartProvider>

      

  );
}

export default App;