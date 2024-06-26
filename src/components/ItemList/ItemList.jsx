import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ItemList = ({product}) => {
    const navigate = useNavigate()
    return (
        <>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Button onClick={()=>navigate("/detail/" + product.id)} variant="success">Ver mas</Button>
            </Card.Body>
          </Card>
        </>
    );     
}


export default ItemList

/* const navigate = useNavigate()
  return (
    <div>
      <h3>{product.title}</h3>
      <img src={product.image}/>
      <span>{product.price}</span>
      <button onClick={()=> Navigate("/detail/" + product.id)}>Detalle</button>
    </div>
  ) */