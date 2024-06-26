import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BarraDeNavegacion from '../components/Navbar/Navbar'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer'
import ItemCartContainer from '../components/ItemCartContainer/ItemCartContainer'
import OrderContainer from '../components/OrderContainer/OrderContainer'
import CartProvider from '../context/cart/CartProvider'
import Footer from '../components/Footer/Footer'

const AppRouter = () => {
  return (
    <div>
        <BrowserRouter>
            <CartProvider>
                <BarraDeNavegacion/>
                    <Routes>
                        <Route path='/' element={<ItemListContainer/>}/>
                        <Route path='/detail/:id' element={<ItemDetailContainer/>}/>
                        <Route path='/cart' element={<ItemCartContainer/>}/>
                        <Route path='/orders' element={<OrderContainer/>}/>
                    </Routes>
                  <Footer/>
            </CartProvider>
        </BrowserRouter>
    </div>
  )
}

export default AppRouter