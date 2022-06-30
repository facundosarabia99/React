import React from "react";
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import FormCompra from "./components/FormCompra/FormCompra"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContextProvider from "./Context/CartContext";
import { AddItem } from "./components/admin/AddItem";
import { EditItem } from "./components/admin/EditItem";

function App() {

  return (
    <><CartContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/category/:id' element={<ItemListContainer greeting={'Hola mundo'} />} />
          <Route exact path='/product/:id' element={<ItemDetailContainer />} />
          <Route exact path='/aboutus' element={<AboutUs />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route path="/formcompra" element={<FormCompra />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin/additem" element={<AddItem />} />
          <Route path="/admin/edititem/:id" element={<EditItem />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider></>
  );
}

export default App;
