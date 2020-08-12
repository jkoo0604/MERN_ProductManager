import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { navigate, Link } from '@reach/router';
import styles from '../components/Product.module.css';
import OneForm from '../components/OneForm';

const Update = props => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState('');
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDescription(res.data.product.description);
                setLoaded(true);
            })
    }, []);

    const updateProduct = prod => {
        axios.put('http://localhost:8000/api/products/update/' + id, prod)
            .then(res=>{
                console.log(res);
                navigate(`/products/${id}`);
            })
            .catch(err=>console.log(err))
    };

    return(
        <div className={styles.container}>
            <h3>Update Product</h3>
            { loaded ? 
            <>
                <OneForm initialTitle={title} initialPrice={price} initialDescription={description} submitHandler={updateProduct}/>
                <div className="row">
                    <div className="col-sm text-center">
                        <Link to={`/products/`}><button className="btn btn-outline-dark btn-sm">Back</button></Link>
                    </div>
                </div>
            </> :
            <p>Loading ... </p>
            }
        </div>
    )
}

export default Update;