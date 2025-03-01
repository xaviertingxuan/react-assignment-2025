import { Route, Switch } from 'wouter';
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/Homepage'
import Navbar from './components/Navbar'
import ProductPage from './components/ProductPage'
import RegisterPage from './components/RegisterPage'


function App() {


  return (
    <>
      <Navbar />
      <Header />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/register" component={RegisterPage} />
      </Switch>
      <Footer />
    </>
  )
}

export default App









