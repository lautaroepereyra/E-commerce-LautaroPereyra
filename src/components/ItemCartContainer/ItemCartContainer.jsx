import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import ItemCart from '../ItemCart/ItemCart'
import {addDoc, getFirestore, collection} from 'firebase/firestore'
import { Navigate,useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

const ItemCartContainer = () => {
  const {cart, totalPrice, clearCart} = useContext(CartContext)
  const navigate = useNavigate()
  const addOrder = async () =>{
    const order = {
      buyer:{
        name: "Jose Fernandez",
        phone: "123445667",
        email: "jose_ferna@hotmail.com"
      },
      items: cart,
      total: totalPrice
    }

    const db = getFirestore()
    const docRef = collection(db, "orders")
    await addDoc(docRef, order)
    clearCart()
    Navigate("/orders")

  }
  return (
    <>
        {cart.map(item => <ItemCart key={item.id} item={item}/>)}
        <p>Total: {totalPrice}</p>
        <Button onClick={addOrder} variant="success">Finalizar Compra</Button>
    </>
  )
}

export default ItemCartContainer