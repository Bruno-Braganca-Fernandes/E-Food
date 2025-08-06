import { useEffect, useState } from "react";

import RestaurantCard from "../../components/RestaurantCard";
import { Grid } from "./style";
import { Container } from "../../styles";
import Header from "../../components/Header";

type RestaurantData = {
  id: number;
  titulo: string;
  descricao: string;
  tipo: string;
  capa: string;
  destacado: boolean;
  avaliacao: number;
};

const Home = () => {
  const [restaurants, setRestaurants] = useState<RestaurantData[]>([]);

  useEffect(() => {
    fetch("https://ebac-fake-api.vercel.app/api/efood/restaurantes")
      .then((res) => res.json())
      .then((data) => setRestaurants(data));
  }, []);

  console.log(restaurants);

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
