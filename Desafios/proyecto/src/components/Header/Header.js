import CartWidget from "../CartWidget/CartWidget"

export default function Header (){
    return (
        <Header>
            <div className="logo">
                <h1>E Commerce</h1>
            </div>
                <nav>
                    <li>Inicio</li>
                    <li>Productos</li>
                </nav>
                <CartWidget />
        </Header>
    )
}