import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import RestaurantHeader from "../../components/RestaurantHeader";
import { Dish, Restaurant } from "../../types";
import DishCard from "../../components/DishCard";
import { Grid } from "./style";
import { Container } from "../../styles";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  useEffect(() => {
    if (!id) return;

    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurant) => setRestaurant(data));
  }, [id]);

  return (
    <>
      {restaurant && (
        <>
          <RestaurantHeader restaurant={restaurant} />
          <Container>
            <Grid>
              {restaurant.cardapio.map((dish: Dish) => (
                <DishCard key={dish.id} dish={dish} />
              ))}
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default RestaurantPage;
