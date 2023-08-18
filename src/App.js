import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/Menu";
import Cards from "./pages/Cards";
import Rewads from "./pages/Rewads";


function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
      <Header />
        <Routes>
          <Route exact path="/" element={<Menu/>} />
          <Route path="/rewads" element={<Rewads/>} />
          <Route path="/cards" element={<Cards/>} />
        </Routes>
        </BrowserRouter>
    </>

    
  );
}

export default App;
