import { useContext } from "react"
import CartContext from "../../context/cart/CartContext"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

const ItemCart = ({item}) => {
  const {deleteItemCart} = useContext(CartContext)
  return (
        <>
            <Card key={item.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Button onClick={() => deleteItemCart(item.id)} variant="danger">Eliminar del Carrito</Button>
                </Card.Body>
            </Card>
        </>
  )
}

export default ItemCart