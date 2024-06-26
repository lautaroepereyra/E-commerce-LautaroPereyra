import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useContext } from "react";
import CartContext from "../../context/cart/CartContext";
import Count from "../Count/Count";

const ItemDetail = ({product}) => {
    const [count, setCount] = useState(1)
    const {cart,addItemCart} = useContext(CartContext)
    const navigate = useNavigate()

    const addItem =() =>{
        addItemCart({...product,cuantity:count})
        navigate("/cart")
    }
    return (
        <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Count count={count} handleCount={setCount} stock={product.stock}/>
                <Button onClick={addItem} variant="success">Agregar al Carrito</Button>
            </Card.Body>
        </Card>
    );  
}

export default ItemDetail