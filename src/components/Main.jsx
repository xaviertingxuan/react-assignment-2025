import React from 'react'

const Main = () => {
  return (
    <div>
      <main className="container my-5">
      <h2 className="text-center mb-4">Featured Products</h2>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://picsum.photos/id/20/300/200"
              className="card-img-top"
              alt="Product 1"
            />
            <div className="card-body">
              <h5 className="card-title">Product 1</h5>
              <p className="card-text">$19.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://picsum.photos/id/1/300/200"
              className="card-img-top"
              alt="Product 2"
            />
            <div className="card-body">
              <h5 className="card-title">Product 2</h5>
              <p className="card-text">$29.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://picsum.photos/id/26/300/200"
              className="card-img-top"
              alt="Product 3"
            />
            <div className="card-body">
              <h5 className="card-title">Product 3</h5>
              <p className="card-text">$39.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card">
            <img
              src="https://picsum.photos/id/96/300/200"
              className="card-img-top"
              alt="Product 4"
            />
            <div className="card-body">
              <h5 className="card-title">Product 4</h5>
              <p className="card-text">$49.99</p>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      </div>
    </main>
    </div>
  )
}


export default Main