import Header from "./components/Header";
import { GlobalStyle } from "./styles";
import RestaurantCard from "./components/RestaurantCard";

import sushiRestaurantImage from "../src/assets/images/sushi.png";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <RestaurantCard
        image={sushiRestaurantImage}
        title={"Hioki Sushi"}
        description={
          "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
        }
        rating={4.9}
        category={["Destaque da semana", "Japonesa"]}
        link={""}
      />
    </>
  );
}

export default App;
