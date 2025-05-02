import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/navbar/nav.jsx";
import Footer from "./componets/footer/footer.jsx";
import Home from "./componets/home/header.jsx";
import Tishirt from "./pages/tishirts/tishirt.jsx"
import DressStyle from "./componets/cards/dressstyle/dressstyle.jsx";
import Casual  from "./pages/casual/casual.jsx"
import Cart from "./pages/cart/cart.jsx"
import { CartProvider } from "./pages/cartcontext.jsx";



function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Tishirt" element={<Tishirt/>} />
          <Route path="/Dressstyle" element={<DressStyle/>} />
          <Route path="/Casual" element={<Casual/>} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
        <Footer />
      </Router>
     </CartProvider>
  );
}

export default App;
