import Header from "./components/Navbar/Navbar";
//import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (
    <div className="App">
      <Header />
      <ItemListContainer title= "Nuestros Productos" />
{/*     <Footer />*/} 
    </div>
  );
}

export default App;
