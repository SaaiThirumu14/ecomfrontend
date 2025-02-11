import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const ProductDetail = ({cartItems,setcartItems}) => {
    const [products, setProducts] = useState(null);
    const [qty,setqty]=useState(1)
    const { id } = useParams();
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + '/products/' + id).then(res => res.json()).then(res => setProducts(res.products))
    }, [])

    function addCart() {
        const itemexist=cartItems.find((item) => item.products._id === products._id)
        if (!itemexist) {
            const newItem = { products, qty };
            setcartItems((state) => [...state, newItem]);
            toast.success("Cart item added successfully")
        }
    }

    function increase(){
        if(qty <products.stock){
            setqty((state)=>state+1)
        }
    }
    function decrease(){
        if(qty===0){
            return
        }
        setqty((state)=>state-1)
    }

    return (
        products && <div class="container container-fluid">
            <div class="row f-flex justify-content-around">
                <div class="col-12 col-lg-5 img-fluid" id="product_image">
                    <img src={products.images[0].image} alt="sdf" height="500" width="500" />
                </div>

                <div class="col-12 col-lg-5 mt-5">
                    <h3>{products.name}</h3>
                    <p id="product_id">{products._id}</p>

                    <hr />

                    <div class="rating-outer">
                        <div class="rating-inner" style={{width:`${(products.ratings/5)*100}%`}}></div>
                    </div>


                    <hr />

                    <p id="product_price">{products.price}</p>
                    <div class="stockCounter d-inline">
                        <span class="btn btn-danger minus" onClick={decrease}>-</span>

                        <input type="number" class="form-control count d-inline" value={qty} readOnly />

                        <span class="btn btn-primary plus" onClick={increase}>+</span>
                    </div>
                    <button type="button" id="cart_btn" class="btn btn-primary d-inline ml-4" onClick={addCart} disabled={products.stock == 0}>Add to Cart</button>

                    <hr />

                    <p>Status: <span id="stock_status" className={products.stock > 0 ? "text-success":"text-danger"}>{products.stock > 0 ?'In stock':'Out stock'} </span></p>

                    <hr />

                    <h4 class="mt-2">Description:</h4>
                    <p>{products.description}</p>
                    <hr />
                    <p id="product_seller mb-3">Sold by: <strong>Amazon</strong></p>

                    <div class="rating w-50"></div>

                </div>
            </div>
        </div>
    )
}

export default ProductDetail