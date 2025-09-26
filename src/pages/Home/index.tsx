import { useEffect, useState } from "react";

import RestaurantCard from "../../components/RestaurantCard";
import { Grid } from "./style";
import { Container } from "../../styles";
import Header from "../../components/Header";
import { Restaurant } from "../../types";

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurants.map((rest) => (
            <RestaurantCard
              key={rest.id}
              title={rest.titulo}
              description={rest.descricao}
              image={rest.capa}
              rating={rest.avaliacao}
              category={[
                ...(rest.destacado ? ["Destaque da semana"] : []),
                rest.tipo,
              ]}
              link={`/restaurant/${rest.id}`}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
