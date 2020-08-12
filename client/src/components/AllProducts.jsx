import React from 'react';
import { Link } from '@reach/router';
import styles from './Product.module.css';
import {ReactComponent as EditIcon} from '../assets/pencil-square.svg';
import {ReactComponent as DeleteIcon} from '../assets/trash.svg';

const AllProducts = props=> {
    const {products, deleteHandler} = props;

    const handleClick = (id) => {
        deleteHandler(id);
    }

    return(
        <div className={styles.container}>           
            <table className="table table-sm">
                <tbody>
                    { products.map((product, idx) => (
                        <tr key={idx}>
                            <td><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                            <td>
                                <Link to={`/products/${product._id}/edit`}><EditIcon className={styles.svg + ' ' + styles.edit}/></Link>
                                <DeleteIcon className={styles.svg + ' ' + styles.delete} onClick={()=>handleClick(product._id)}/>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts;