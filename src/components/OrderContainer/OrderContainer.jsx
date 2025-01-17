import { useState, useEffect } from "react"
import { collection,getDocs,getFirestore } from "firebase/firestore"

const OrderContainer = () => {
    const [orders, setOrders] = useState([])

    useEffect(()=>{
        (async ()=>{
            const db = getFirestore()
            const docsRef = collection(db, "orders")
            const querySnapshot = await getDocs(docsRef)
            setOrders(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()
    },[])
  return (
    <div>
        {orders.map(order => <div key={order.id}> <p>{order.id}</p> </div>)}
    </div>
  )
}

export default OrderContainer