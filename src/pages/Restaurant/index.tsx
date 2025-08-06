import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import RestaurantHeader from "../../components/RestaurantHeader";
import Dish from "../../models/Dish";
import RestaurantModel from "../../models/Restaurant";
import DishCard from "../../components/DishCard";
import { Grid } from "./style";
import { Container } from "../../styles";

const Restaurant = () => {
  const { id } = useParams();
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [restaurant, setRestaurant] = useState<RestaurantModel | null>(null);

  useEffect(() => {
    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        const parsedDishes = data.cardapio.map(
          (item: any) =>
            new Dish(
              item.id,
              item.nome,
              item.descricao,
              item.preco,
              item.foto,
              item.porcao
            )
        );
        setDishes(parsedDishes);

        const parsedRestaurant = new RestaurantModel(
          data.id,
          data.titulo,
          data.descricao,
          data.tipo,
          data.capa,
          data.destacado,
          data.avaliacao,
          parsedDishes
        );
        setRestaurant(parsedRestaurant);
      });
  }, [id]);

  return (
    <>
      {restaurant && <RestaurantHeader restaurant={restaurant} />}
      <Container>
        <Grid>
          {dishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Restaurant;
