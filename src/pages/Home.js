import { Fragment, useEffect, useState } from 'react';

import React from 'react';
import Product_card from '../Components/Product_card';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
    const [products,setProducts]=useState([]);
// useSearchparams helps in handling searching work
    const [searchParams,setSearchParams]=useSearchParams()

    useEffect(()=>{
        fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams).then(res=>res.json()).then(res=>setProducts(res.products))
    },[searchParams])//once change takes place the api calll takes place
  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="containerdata">
        {products.map(product=><Product_card product={product}/>)}
      </section>
    </Fragment>
  );
};

export default Home;
