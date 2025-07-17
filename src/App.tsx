import Header from "./components/Header";
import { GlobalStyle } from "./styles";

import Restaurants from "./pages/Restaurants";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Restaurants />
      <Footer />
    </>
  );
}

export default App;
