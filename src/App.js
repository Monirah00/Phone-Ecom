import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Product from './Components/Products';
import { Routes, Route } from 'react-router-dom';
import ProductDetails from './Components/ProductDetails';
import store from './redux/store/store';
import {Provider} from 'react-redux'
import Cart from './Components/Cart';
import Checkout from './Components/Checkout'

function App() {
  return (
   <>
   <Provider store={store}>
   <Header />
   <Routes>
     <Route exact path='/' element={<Home  />} />
     <Route exact path='/Products' element={<Product  />} />
     <Route exact path='/Products/:id' element={<ProductDetails />} />
     <Route exact path='/cart' element={<Cart />} />
     <Route exact path='/checkout' element={<Checkout />} />
     <Route exact path='/About' element={<About  />} />
     <Route exact path='/Contact' element={<Contact  />} />
   </Routes>
   <Footer />
   </Provider>
   </>
  );
}

export default App;
