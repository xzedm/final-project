import React from 'react';
import {Link, useParams} from 'react-router-dom';
import data from '../data';

function ProductScreen (props) {
    const { id } = useParams();
    const product = data.products.find(x => String(x._id) === id);
    return <div className="back-to-result">
        <div>
            <Link to="/">Back</Link>
        </div>
        <div className="details">
            <div className="details-image">
                <img src={product.image} alt="product"></img>
            </div>
            <div className="details-info">
                <ul>
                    <li>
                        <h4>{product.name}</h4>
                    </li>
                    <li>
                        {product.rating} Stars ({product.numReviews} Reviews) 
                </li>
                <li>
                    Price: <b>${product.price}</b>
                </li>
                <li>
                  Description:
                  <div>{product.description}</div>
                </li>
                </ul>
            </div>
            <div className="details-action">
                <ul>
                    <li>Price: {product.price}</li>
                    <li>Status: {product.status}</li>
                    <li>
                        Qty <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                        </li>
                        <li>
                            <button className="button">Add to Cart</button>
                        </li>
                </ul>
            </div>
        </div>
    </div>
}
export default ProductScreen;