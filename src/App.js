import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import MusicProduct from './components/Body/MusicProduct';
import Footer from './components/Footer/Footer';
import Modal from './components/Cart/Modal'
import Cart from './components/Cart/Cart';

function App() {
  return <Fragment>
  <Header /> ;
  <MusicProduct />;
  <Cart />
  <Footer />
  </Fragment>
}

export default App;
