import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

function HomeScreen(props) {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get('/api/products');
                setProduct(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
    }, []);
    

    return <ul className="products">
              { 
              products.map(product => 
              <li key={product._id}>
                <div className="product">
                <Link to={'/product/' + product._id}>
                <img className="product-image" src="/images/nike.png" alt="product" />
                </Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating">{product.rating} stars</div>
                </div>
              </li>)}
            </ul>
}
export default HomeScreen;