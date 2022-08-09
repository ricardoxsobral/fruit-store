import CartItens from "../components/cart/CartItens"
function Cart(props){
    const {cartItems, onAdd, onRemove} = props
    return(
        <div className="Cart">
            <CartItens onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
        </div>
    )
}
export default Cart