import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';
import styles from '../components/Product.module.css';

const OneProduct = props => {
    const { id } = props;
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products/' + id)
            .then(res=>{
                console.log(res);
                setProduct(res.data.product);
                setLoaded(true);
            })
            .catch(err=>console.log(err))
    },[]);

    const handleClick = (id) => {
        axios.delete('http://localhost:8000/api/products/delete/' + id)
            .then(res=>{
                navigate('/products');
            })
    }

    return (
        <div className={styles.container}>
            { loaded &&
            <>
            <h4>{product.title}</h4>
            <table className="table table-sm">
                <tbody>
                    <tr>
                        <td>Price:</td>
                        <td>${product.price}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{product.description}</td>
                    </tr>
                </tbody>
            </table>
            <div className="row">
                <div className="col-sm-6 text-center">
                    <Link to={`/products/${product._id}/edit`}><button className="btn btn-outline-dark btn-sm">Edit</button></Link>
                </div>
                <div className="col-sm-6 text-center">
                    <button className="btn btn-outline-danger btn-sm" onClick={()=>handleClick(product._id)}>Delete</button>
                </div>
            </div>
            <div className="row">
                <div className="col text-center">
                    <Link to={`/products/`}><button className="btn btn-dark btn-sm">Back</button></Link>
                </div>
            </div>
            </>
            }
        </div>
    )
}

export default OneProduct;