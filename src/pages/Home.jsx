import FruitCard from "../components/card/FruitCard"
import './home.css'

function Home(props) {
  const{fruits, onAdd, status} =props 
    return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <h1>{status}</h1>
            <div className="cards">
              {fruits.map((fruit) =>(
                <FruitCard key={fruit.id} fruit={fruit} onAdd={onAdd} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Home