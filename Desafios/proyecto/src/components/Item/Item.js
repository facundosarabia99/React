import {Card, Button} from 'react-bootstrap';
export default function Item ({product}){
  return(
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.image} style={{maxWidth: "100%"}} />
  <Card.Body>
    <Card.Title>{product.title}</Card.Title>
    <Card.Text>
      <p>Stock: {product.stock}</p>
      <p>Stock: {product.price}</p>

    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
  )
    
}