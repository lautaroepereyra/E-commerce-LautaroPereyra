import { useState,useEffect } from "react"
import {getFirestore, collection,getDocs} from 'firebase/firestore'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        (async ()=>{
            const db = getFirestore()
            const docsRef = collection(db, "Products")
            const querySnapshot = await getDocs(docsRef)
            setProducts(querySnapshot.docs.map(doc => ({id:doc.id,...doc.data()})))
        })()
    },[])

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col className="d-flex" md="auto">
                    {products.map(product => <ItemList key={product.id} product={product}/>)}
                </Col>
            </Row>
        </Container>
    );
}
export default ItemListContainer