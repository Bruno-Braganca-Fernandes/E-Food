import Header from "./components/Header";
import { GlobalStyle } from "./styles";
import RestaurantCard from "./components/RestaurantCard";

import sushiRestaurantImage from "../src/assets/images/sushi.png";
import Restaurants from "./pages/Restaurants";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Restaurants />
    </>
  );
}

export default App;
