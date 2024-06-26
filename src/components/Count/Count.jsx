import Button from "react-bootstrap/Button"

const Count = ({count, handleCount,stock}) => {
    const incrementCount = () =>{
    if(count < stock) handleCount(count => count + 1)
    }

    const decrementCount = () =>{
    if(count > 1) handleCount(count => count - 1)
    }
  return (
    <div>
        <Button onClick={decrementCount}>-</Button>
        <span>{count}</span>
        <Button onClick={incrementCount}>+</Button>
    </div>
  )
}

export default Count