import { useContext } from "react"
import CartContext from "../../context/cart/CartContext"

const Cartwidget = () => {
  const {totalCuantityCart} = useContext(CartContext)
  return (
    <div>🛒{totalCuantityCart}</div>
  )
}

export default Cartwidget