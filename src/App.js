import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import { Fragment } from 'react';
import MusicProduct from './components/Body/MusicProduct';
import Footer from './components/Footer/Footer';

function App() {
  return <Fragment>
  <Header /> 
  <MusicProduct />;
  <Footer />
  </Fragment>
}

export default App;
