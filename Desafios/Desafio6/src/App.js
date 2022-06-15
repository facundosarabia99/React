import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import cart from "./pages/Cart";
import ItemDetailtContainer from "./components/ItemDetailtContainer/ ItemDetailtContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from "./Context/CartContext";
import {AddItem} from "./components/admin/AddItem";
import {EditItem} from "./components/admin/EditItem";




function App() {

 
  return (
    <CartContextProvider>
    <>
    <Router>
    <Navbar/>
      <Routes>
        <Route exact path='/' element={ <Home/> } />
        <Route exact path='/category/:id' element={ <ItemListContainer greeting={'Hola mundo'} /> } />
        <Route exact path='/item/:id' element={ <ItemDetailtContainer /> } />
        <Route exact path='/aboutus' element={ <AboutUs/> } />
        <Route exact path='/contact' element={ <Contact/> } />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/admin/additem" element={<AddItem/>}/>
        <Route path="/admin/edititem/:id" element={<EditItem/>}/>
      </Routes>
    </Router>
    </>
    </CartContextProvider>
  );
}

export default App;
