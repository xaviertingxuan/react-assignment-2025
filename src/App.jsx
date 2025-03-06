import { Route, Switch } from 'wouter';
import './App.css'
import Footer from './components/Footer'
import HomePage from './components/Homepage'
import ProductPage from './components/ProductPage'
import RegisterPage from './components/RegisterPage'
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';


function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
      <Footer />
    </>
  )
}

export default App









