import { Link } from 'react-router-dom';
import "./navbar.css"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import img from '../../assets/frexco.png'

function Navbar(props) {
  const {setShow} = props
    return (
      <div className="Navbar">
        <div className="container">
          <div className="row">
            <div className="title" onClick={() => setShow(true)} >
              <Link to="/"><img src={img} alt="" className='logo'/></Link>
            </div>
            <Link to="/cart" className='my-cart' onClick={() => setShow(false)}>
                <ShoppingCartIcon />
                <p>Ver carrinho</p>
              </Link>
          </div>
        </div>
      </div>
    )
  }
  
  export default Navbar