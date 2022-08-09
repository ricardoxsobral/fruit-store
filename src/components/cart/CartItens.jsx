import './Cart.css'

function CartItens(props) {
    const {cartItems, onAdd, onRemove} = props
    return (
      <div className="CartItens">
        <div className="container">
          <div className="empty-cart">
            <h1>CARRINHO</h1>{cartItems.length  === 0 && <h1 className='empty'>VAZIO</h1>}
          </div>
          <br></br>
          {cartItems.map((item) => (
            <div key={item.id} className="row">
              <div className="allcart">
                <div className="col-8">
                  <div className="itemname">
                    {item.name}
                  </div>
                </div>
                <div className="col-4">
                  <div className="buttons">
                    <button onClick={() => onAdd(item)} className="add">+</button>
                    <div className="qty">
                      {item.qty}
                    </div>
                    <button onClick={() => onRemove(item)} className="remove">-</button>
                  </div>
                </div>
              </div>
              <hr></hr>
            </div>
          ))}
        </div>
      </div>
    )
  }
  
  export default CartItens