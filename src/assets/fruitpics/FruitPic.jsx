import Apple from "./fruitimages/apple.jpg";
import Banana from "./fruitimages/banana.jpeg";
import Cherry from "./fruitimages/cherry.jpg";
import Lemon from "./fruitimages/lemom.jpg";
import Mango from "./fruitimages/mango.jpeg";
import Orange from "./fruitimages/orange.jpg";
import Pear from "./fruitimages/pear.jpg";
import Pineapple from "./fruitimages/pineapple.jpg";
import Plum from "./fruitimages/plum.jpg";
import Raspberry from "./fruitimages/raspberry.jpg";
import Strawberry from "./fruitimages/strawberry.jpg";
import Tomato from "./fruitimages/tomato.jpg";
import Watermelon from "./fruitimages/watermelon.jpg";
import Apricot from "./fruitimages/apricot.jpg";
import Blackberry from "./fruitimages/blackberry.jpg";
import Blueberry from "./fruitimages/blueberry.jpg";
import Durian from "./fruitimages/durian.jpg";
import Fig from "./fruitimages/fig.jpg";
import Gooseberry from "./fruitimages/gooseberry.jpg";
import Grapes from "./fruitimages/grape.jpg";
import Kiwi from "./fruitimages/kiwi.jpg";
import Lime from "./fruitimages/lime.jpg";
import Lingonberry from "./fruitimages/lingonberry.jpg";
import Lychee from "./fruitimages/lychee.jpeg";
import Melon from "./fruitimages/melon.jpg";
import Papaya from "./fruitimages/Papaya.jpg";
import Passionfruit from "./fruitimages/passionfruit.jpg";
import Persimmon from "./fruitimages/persimmon.jpg";
import Umbu from "./fruitimages/umbu.jpg";
import GreenApple from "./fruitimages/green-apple.jpeg";
import Guava from "./fruitimages/guava.jpg";
import "./FruitPic.css"

const FruitPic = ({ image }) => {
  switch (image) {
    case "Guava":
      image = Guava;
      break;
    case "Apricot":
      image = Apricot;
      break;
    case "Blackberry":
      image = Blackberry;
      break;
    case "Blueberry":
      image = Blueberry;
      break;
    case "Durian":
      image = Durian;
      break;
    case "Fig":
      image = Fig;
      break;
    case "Gooseberry":
      image = Gooseberry;
      break;
    case "Grapes":
      image = Grapes;
      break;
    case "Kiwi":
      image = Kiwi;
      break;
    case "Lime":
      image = Lime;
      break;
    case "Lingonberry":
      image = Lingonberry;
      break;
    case "Lychee":
      image = Lychee;
      break;
    case "Melon":
      image = Melon;
      break;
    case "Papaya":
      image = Papaya;
      break;
    case "Passionfruit":
      image = Passionfruit;
      break;
    case "Persimmon":
      image = Persimmon;
      break;
    case "Umbu":
      image = Umbu;
      break;
    case "GreenApple":
      image = GreenApple;
      break;
    case "Plum":
      image = Plum;
      break;
    case "Apple":
      image = Apple;
      break;
    case "Banana":
      image = Banana;
      break;
    case "Cherry":
      image = Cherry;
      break;
    case "Lemon":
      image = Lemon;
      break;
    case "Mango":
      image = Mango;
      break;
    case "Orange":
      image = Orange;
      break;
    case "Pear":
      image = Pear;
      break;
    case "Pineapple":
      image = Pineapple;
      break;
    case "Raspberry":
      image = Raspberry;
      break;
    case "Strawberry":
      image = Strawberry;
      break;
    case "Tomato":
      image = Tomato;
      break;
    case "Watermelon":
      image = Watermelon;
      break;
  }

  return (
    <div className="FruitPic">
      <img src={image} alt=""/>
    </div>
  );
};

export default FruitPic;
