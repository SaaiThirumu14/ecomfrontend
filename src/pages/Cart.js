import { React, Fragment, useState } from 'react'

const Cart = ({ cartItems, setcartItems }) => {

    const [complete,setComplete]=useState(false)

    function increase(item) {
        if (item.qty == item.products.stock) {
            return
        }
        const updatedItems = cartItems.map((i) => {
            if (i.products._id == item.products._id) {
                i.qty++
            }
            return i;
        })
        setcartItems(updatedItems)
    }
    function decrease(item) {
        if (item.qty > 1) {
            const updatedItems = cartItems.map((i) => {
                if (i.products._id == item.products._id) {
                    i.qty++
                }
                return i;
            })
            setcartItems(updatedItems)
        }
    }
    function removeItem(item) {
        const updatedItems = cartItems.filter((i) => {
            if (i.products._id != item.products._id) {
                return true
            }
        })
        setcartItems(updatedItems)
    }
    function placeOrderHandler(){
        fetch(process.env.REACT_APP_API_URL+`/orders`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(cartItems)
        }).then(()=>{
            setcartItems([]);
            setComplete(true);
            console.log("success")
        })
    }
    return (
         cartItems.length > 0 ?<Fragment>
            <div class="container container-fluid">
                <h2 class="mt-5">Your Cart: <b>{cartItems.length > 0 ? cartItems.length : 0} items</b></h2>

                <div class="row d-flex justify-content-between">
                    {cartItems.map((index) =>
                        <Fragment>
                            <div class="col-12 col-lg-8">
                                <hr />
                                <div class="cart-item">
                                    <div class="row">
                                        <div class="col-4 col-lg-3">
                                            <img src={index.products.images[0].image} alt="Laptop" height="90" width="115" />
                                        </div>

                                        <div class="col-5 col-lg-3">
                                            <a href="#">{index.products.name}</a>
                                        </div>


                                        <div class="col-4 col-lg-2 mt-4 mt-lg-0">
                                            <p id="card_item_price">{index.products.price}</p>
                                        </div>

                                        <div class="col-4 col-lg-3 mt-4 mt-lg-0">
                                            <div class="stockCounter d-inline">
                                                <span class="btn btn-danger minus" onClick={() => decrease(index)}>-</span>
                                                <input type="number" class="form-control count d-inline" value={index.qty} readOnly />

                                                <span class="btn btn-primary plus" onClick={() => increase(index)}>+</span>
                                            </div>
                                        </div>

                                        <div class="col-4 col-lg-1 mt-4 mt-lg-0">
                                            <i id="delete_cart_item" class="fa fa-trash btn btn-danger" onClick={() => removeItem(index)}></i>
                                        </div>

                                    </div>
                                </div>
                                <hr />
                            </div>
                        </Fragment>
                    )}
                    <div class="col-12 col-lg-3 my-4">
                        <div id="order_summary">
                            <h4>Order Summary</h4>
                            <hr />
                            <p>Subtotal:  <span class="order-summary-values">{cartItems.reduce((acc,item)=>(acc+item.qty),0)} (Units)</span></p>
                            <p>Est. total: <span class="order-summary-values">${cartItems.reduce((acc,item)=>(acc+item.qty*item.products.price),0)}</span></p>

                            <hr />
                            <button id="checkout_btn" onClick={placeOrderHandler} class="btn btn-primary btn-block">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment> : (!complete ? <h2 >Your cart is empty</h2> : <Fragment>
            <h2>Order complete</h2><p>Your order has been placed successfullyy</p>
        </Fragment>)
    )
}

export default Cart