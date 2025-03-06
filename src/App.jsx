import { Route, Switch } from 'wouter';
import './App.css'
import Footer from './components/Footer'
import HomePage from './components/Homepage'
import ProductPage from './components/ProductPage'
import RegisterPage from './components/RegisterPage'
import Navbar from './components/Navbar';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import { useEffect } from 'react';
import { useFlashMessage } from './FlashMessageStore';


function App() {

  const { getMessage, clearMessage } = useFlashMessage();
  const flashMessage = getMessage();

  //when the component mounts, set a timer to clear the message after 3 seconds

  useEffect(() => {

    const timer = setTimeout(() => {
      clearMessage();
    }
    , 9000);
    return () => {
      clearTimeout(timer);
    };
  }
  , [flashMessage, clearMessage]);

  return (
    <>
      <Navbar />
      {flashMessage.message && (
        <div className={`alert alert-${flashMessage.type} text-center m-2`}>
          {flashMessage.message}
        </div>
      )}
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









