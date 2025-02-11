import React from 'react'
import {Link} from 'react-router-dom'
const Product_card = ({product}) => {
  return (
        <div className="rowdata">
          <div className="col">
            <div className="card p-3 rounded">
              <img
                className="card-img-top mx-auto"
                src={product.images[0].image}
                alt="OPPO F21s Pro 5G"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  <a href="">{product.name}</a>
                </h5>
                <div className="ratings mt-auto">
                  <div className="rating-outer">
                    <div className="rating-inner" style={{width:`${(product.ratings/5)*100}%`}}></div>
                  </div>
                </div>
                <p className="card-text">{product.price}</p>
                <Link to={"products/"+product._id} id="view_btn" className="btn btn-block">View Details</Link> 
              </div>
            </div>
          </div>
        </div>
  )
}

export default Product_card