import {link} from 'react-router-dom';

export default function Item({ item }){
    return (
        <div key={item.id}>
            <Link to={`/product/${item.id}`}>
            <p className="name">{item.name}</p>
            <p className="price">{item.price}</p>
            <img src={item.image} alt="Product image"/>
            </Link>
        </div>
    )
}
