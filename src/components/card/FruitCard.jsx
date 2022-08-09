import "./Card.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FruitPic from "../../assets/fruitpics/FruitPic";

function FruitCard(props, { showLink = true }) {
  const { fruit, onAdd } = props;

  return (
    <div className="FruitCard">
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia>
          <FruitPic image={fruit.name} />
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fruit.name}
          </Typography>
          <Typography component={"span"} variant={"body2"}>
            <div className="info">
              <div className="info-carbohydrates">
                <h3>Carboidratos: </h3>
                <div>
                  <p>{fruit.nutritions.carbohydrates}</p>
                </div>
              </div>
              <div className="info-protein">
                <h3>Proteínas: </h3>
                <div>
                  <p>{fruit.nutritions.protein}</p>
                </div>
              </div>
              <div className="info-fat">
                <h3>Gordura: </h3>
                <div>
                  <p>{fruit.nutritions.fat}</p>
                </div>
              </div>
              <div className="info-calories">
                <h3>Caloria: </h3>
                <div>
                  <p>{fruit.nutritions.calories}</p>
                </div>
              </div>
              <div className="info-sugar">
                <h3>Açúcar: </h3>
                <div>
                  <p>{fruit.nutritions.sugar}</p>
                </div>
              </div>
            </div>
          </Typography>
        </CardContent>
        <CardActions>
          <div className="button">
            <Button size="small" onClick={() => onAdd(fruit)}>
              <AddShoppingCartIcon></AddShoppingCartIcon>Adicionar ao Carrinho
            </Button>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}

export default FruitCard;
