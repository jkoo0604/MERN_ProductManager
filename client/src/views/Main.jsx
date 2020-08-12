import React, { useState, useEffect } from 'react';
import axios from 'axios';
import OneForm from '../components/OneForm';
import AllProducts from '../components/AllProducts';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
                setProducts(res.data.products);
                setLoaded(true);
            })
    },[])

    const createProduct = newprod => {
        axios.post('http://localhost:8000/api/products/new', newprod)
            .then(res=>{
                setProducts([...products, res.data.product]);
            })
            .catch(err=>console.log(err))
    }

    const deleteProduct = id => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res=>{
                setProducts(products.filter(product => product._id !== id))
            })
    }

    return(
        <div className="container">
            <h3>Products</h3>
            <OneForm initialTitle="" initialPrice="0" initialDescription="" submitHandler={createProduct} />           
            { loaded && <AllProducts products={products} deleteHandler={deleteProduct}/> }
        </div>
    )
}

export default Main;