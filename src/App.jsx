import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {


  return (
    <>
      <Navbar />
      <Header />
      <div className="row">
        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/20/300/200"
            productName="Product 1"
            price="19.99"
          />
        </div>

        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/1/300/200"
            productName="Product 2"
            price="29.99"
          />
        </div>

        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/26/300/200"
            productName="Product 3"
            price="39.99"
          />
        </div>

        <div className="col-md-3 mb-4">
          <ProductCard
            imageUrl="https://picsum.photos/id/96/300/200"
            productName="Product 4"
            price="49.99"
          />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App









