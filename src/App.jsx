import Navbar from './components/navbar/Navbar';
import Home from './pages/Home'
import Cart from './pages/Cart'
import "./App.css"
import Swal from 'sweetalert2'


import { useState, useEffect } from "react"

function App() {
  const [status, setStatus] = useState('Carregando...')
  const [fruits, setFruits] = useState([]);
  const [show, setShow] = useState(true);
    const getFruits = async(url) => {
      const data = await fetch('https://cors-anywhere.herokuapp.com/http://www.fruityvice.com/api/fruit/all');
      const convert = await data.json();
      setFruits(convert);
      setStatus('');
    } 
    useEffect(() => {
      getFruits();
    }, [])

    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, qty: 1 }]);
        Swal.fire(
          'Good job!',
          'Adicionado com Sucesso !',
          'success'
        )
      }
    };
    const onRemove = (product) => {
      const exist = cartItems.find((x) => x.id === product.id);
      if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    };
    
  return (
    <div className="App">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous"></link>
        <Navbar  setShow={setShow}/>
        {show ? (
          <Home onAdd={onAdd} fruits={fruits} status={status}/>
        ) : (
          <Cart onAdd={onAdd} cartItems={cartItems} onRemove={onRemove} />
        )}
    </div>
  )
}

export default App
