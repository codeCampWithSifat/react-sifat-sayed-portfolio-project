import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Inventory from "./components/Inventory/Inventory";
import NotFound from "./components/NotFound/NotFound";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
