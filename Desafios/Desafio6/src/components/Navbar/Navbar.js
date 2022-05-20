import logoImg from '../../assets/logo.png';
import Carticon from '../CartIcon/CartIcon';

export default function Navbar(){
    return(
        <header className="header">
            <Carticon count={2} />
            <div className="logo">
                <img alt="logo" src={logoImg}/>
            </div>
            <ul className="links" style = {linkstyle}>
                <li>Menu</li>
                <li>Autos</li>
                <li>Electrico</li>
                <li>Login</li>
            </ul>
        
        </header>
    );
}