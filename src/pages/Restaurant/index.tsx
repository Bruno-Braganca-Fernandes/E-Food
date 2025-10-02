import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import RestaurantHeader from "../../components/RestaurantHeader";
import { Dish, Restaurant } from "../../types";
import DishCard from "../../components/DishCard";
import { Grid } from "./style";
import { Container } from "../../styles";
import { RootState } from "../../store";
import { toggleCart } from "../../store/reducers/cart";
import { SidebarContainer } from "../Checkout/styles";
import { Overlay } from "../../components/Cart/style";
import Checkout from "../Checkout";
import Cart from "../../components/Cart";

const RestaurantPage = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);

  const dispatch = useDispatch();
  const { isOpen: isCartOpen } = useSelector((state: RootState) => state.cart);
  const [sidebarView, setSidebarView] = useState<"cart" | "checkout">("cart");

  useEffect(() => {
    if (!id) return;

    fetch(`https://ebac-fake-api.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((data: Restaurant) => setRestaurant(data));
  }, [id]);

  const closeSidebar = () => {
    dispatch(toggleCart());
    setTimeout(() => setSidebarView("cart"), 300);
  };

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
          {isCartOpen && (
            <>
              <Overlay onClick={closeSidebar} />
              <SidebarContainer isOpen={isCartOpen}>
                {sidebarView === "cart" ? (
                  <Cart stageCheckout={() => setSidebarView("checkout")} />
                ) : (
                  <Checkout
                    backToCart={() => setSidebarView("cart")}
                    finishOrder={closeSidebar}
                  />
                )}
              </SidebarContainer>
            </>
          )}
        </>
      )}
    </>
  );
};

export default RestaurantPage;
