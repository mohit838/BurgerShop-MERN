import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Header from "./components/layout/Header";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Cart from "./components/cart/Cart";
import Shipping from "./components/cart/Shipping";
import ConfirmOrder from "./components/cart/ConfirmOrder";
import PaymentSuccess from "./components/cart/PaymentSuccess";
import Footer from "./components/layout/Footer";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/about.scss";
import "./styles/contact.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentsuccess.scss";
import "./styles/footer.scss";
import NotFound from "./components/layout/NotFound";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirm-order" element={<ConfirmOrder />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/not-found" element={<NotFound />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
