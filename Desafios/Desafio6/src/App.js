import Navbar from "./components/Navbar/Navbar"
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailtContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/> 
      <Routes>
        <Route exact path='/' element={ <ItemListContainer greeting={'Hola mundo'} /> } />
        <Route exact path='/category/:id' element={ <ItemListContainer greeting={'Hola mundo'} /> } />
        <Route exact path='/item/:id' element={ <ItemDetailtContainer /> } />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
