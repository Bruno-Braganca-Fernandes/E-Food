import RestaurantCard from "../../components/RestaurantCard";
import { Grid } from "./style";
import { Container } from "../../styles";

import sushiRestaurantImage from "../../assets/images/sushi.png";
import italianRestaurantImage from "../../assets/images/pasta.png";
import Header from "../../components/Header";

const Home = () => {
  const restaurants = [
    {
      image: sushiRestaurantImage,
      title: "Hioki Sushi",
      description:
        "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
      rating: 4.9,
      category: ["Destaque da semana", "Japonesa"],
      link: "",
    },
    {
      image: italianRestaurantImage,
      title: "La Dolce Vita Trattoria",
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      rating: 4.6,
      category: ["Italiana"],
      link: "/restaurante/la-dolce-vita",
    },
    {
      image: italianRestaurantImage,
      title: "La Dolce Vita Trattoria",
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      rating: 4.6,
      category: ["Italiana"],
      link: "/restaurante/la-dolce-vita",
    },
    {
      image: italianRestaurantImage,
      title: "La Dolce Vita Trattoria",
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      rating: 4.6,
      category: ["Italiana"],
      link: "/restaurante/la-dolce-vita",
    },
    {
      image: italianRestaurantImage,
      title: "La Dolce Vita Trattoria",
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      rating: 4.6,
      category: ["Italiana"],
      link: "/restaurante/la-dolce-vita",
    },
    {
      image: italianRestaurantImage,
      title: "La Dolce Vita Trattoria",
      description:
        "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
      rating: 4.6,
      category: ["Italiana"],
      link: "/restaurante/la-dolce-vita",
    },
  ];

  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurants.map((rest, index) => (
            <RestaurantCard key={index} {...rest} />
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
