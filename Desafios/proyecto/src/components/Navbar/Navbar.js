import CartIcon from "../CartIcon/CartIcon"
export default function Navbar(){
  const headerStyles = {
    display: "flex",
    felxwrap: "wrap",
    justifyContent: "space-between",
    listStyle: "none",
    backgroundColor: "red",
  }

  return(
    <header className="header">
      <div className="Logo">Logo</div>
        <ul className="links" style={headerStyles}>
            <li>
              Productos
            </li>
            <li>
              Inicio
            </li>
            <li>
              Perfil
            </li>
            <li>
              contactarme
            </li>
        </ul>
        
        <CartIcon count={4}/>
    </header>
    
  )
}



