import { NavLink } from 'react-router-dom';
import logoImg from '../../assets/logo.png';
import Carticon from '../CartIcon/CartIcon';

export default function Navbar(){
    return(
        <header className="header">
            <Carticon count={2} />
            <div className="logo">
                <NavLink to="/"> <img alt="logo" src={logoImg}/></NavLink>
            </div>
            {/* <ul className="links" style = {linkstyle}> */}
            <ul className="links" >
                <li><NavLink to={`/`} > Inicio </NavLink></li>
                <li><NavLink to={`/category/vehiculos`} > Vehiculos </NavLink></li>
                <li><NavLink to={`/category/electricos`} > Electricos </NavLink></li>
                <li><NavLink to={`/category/libros`} > Libros </NavLink></li>
            </ul>
        
        </header>
    );
}