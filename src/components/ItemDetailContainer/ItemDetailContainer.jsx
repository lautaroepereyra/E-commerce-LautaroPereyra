/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getFirestore,doc,getDoc } from "firebase/firestore"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const {id} = useParams()
    const [product,setProduct] = useState({})

    useEffect(() =>{
        (async () =>{
            const db = getFirestore()
            const docRef = doc(db,"Products",id)
            const docSnap = await getDoc(docRef)
            setProduct({id:docSnap.id,...docSnap.data()})
        })()
    },[])
    return (
    <div>
        <ItemDetail product={product}/>
    </div>
  )
}

export default ItemDetailContainer