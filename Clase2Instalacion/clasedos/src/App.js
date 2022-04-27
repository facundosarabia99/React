function App() {
  return (
    <div className="MiApp">
      Hola todo bien
    </div>
  );
}

const objeto = {
  id: 1,
  nombre: "Agustin"
}

const { nombre } = objeto;

console.log(nombre)

const array3 = [
  {
    id: 1,
    title: "Agustin"
  },
  {
    id: 2,
    title: "Juan"
  }
]

const { title } = array3[1];

console.log(title)

const contenedorStyle = {
  backgroundColor: "#ccc"
}

//return (
  //<div style={contenedorStyle} className="App">
    //<h1>Lista primer aplicacion</h1>
    //<p>Accedo a la propiedad Title del objeto en el array con posiscion 1 {title}</p>
    //<p> Accedo a la prioridad </p>
  //</div>
//)

export default App;
