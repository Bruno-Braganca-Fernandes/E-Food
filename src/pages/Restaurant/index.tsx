import RestaurantHeader from "../../components/RestaurantHeader";

import Dish from "../../models/Dish";
import DishCard from "../../components/DishCard";
import { Grid } from "./style";
import { Container } from "../../styles";

import PizzaMargherita from "../../assets/images/margherita.png";

const dishes = [
  new Dish(
    1,
    "Pizza Margherita",
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    PizzaMargherita
  ),
  new Dish(
    2,
    "Pizza Margherita",
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    PizzaMargherita
  ),
  new Dish(
    3,
    "Pizza Margherita",
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    PizzaMargherita
  ),
  new Dish(
    4,
    "Pizza Margherita",
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    PizzaMargherita
  ),
  new Dish(
    5,
    "Pizza Margherita",
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    PizzaMargherita
  ),
  new Dish(
    6,
    "Pizza Margherita",
    "A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!",
    PizzaMargherita
  ),
];

const Restaurant = () => (
  <>
    <RestaurantHeader />
    <Container>
      <Grid>
        {dishes.map((dish) => (
          <DishCard key={dish.id} dish={dish} />
        ))}
      </Grid>
    </Container>
  </>
);

export default Restaurant;
