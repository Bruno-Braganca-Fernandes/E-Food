import Header from "./components/Header";
import { GlobalStyle } from "./styles";

import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
