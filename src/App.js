import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import OrderReview from './components/OrderReview/OrderReview';
import Inventory from './components/Inventory/Inventory';
import Notfound from './components/Notfound/Notfound';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path="/shop" element={<Shop/>} />
         <Route path="/review" element={<OrderReview/>} />
        <Route path="/inventory" element={<Inventory/>} />
        <Route path="/placeorder" element={<PlaceOrder/>} />
        <Route path="*" element={<Notfound/>} />
      </Routes>

    </div>
  );
}

export default App;
