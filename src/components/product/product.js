import { useContext, useEffect, useState } from 'react';
import './product.css';
import { ProductContext } from '../../App';
const Product = () => {
    const consumingContext = useContext(ProductContext)
    const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const product = consumingContext[0];
    if (product) {
      const newTotalPrice = product.price * quantity;
      setTotalPrice(newTotalPrice);
    }
  }, [quantity, consumingContext]);

  const handleQuantityChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };
  return(
    <div className='content'>
      {consumingContext.map((list, id) =>(
        <div className='left' key={id}>
         <img src={list.images[0]} width={350} height={300} />
         <h1>{list.title}</h1>
         <p>{list.description}</p>
         <p>Rating: {list.rating}</p>
         <div className='right'>
         <div className='select'>
            <label>Quantity: </label>
            <select name='Quantity' onChange={handleQuantityChange} value={quantity}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </select>
            <span className='price'>{list.price* quantity}</span>
         </div>
         <br></br>
         <hr></hr>
         <br></br>
         <div className='down'>
            <div>Subtotal: </div><span className='sub'>{list.price* quantity}</span>
         </div>
         <br></br>
         <div className='down'>
         <div>Shipping: </div><span className='free'>FREE</span>
         </div>
         <br></br>
         <hr></hr>
         <br></br>
         </div>
         <div className='last'>
            <div className='total'>Total:</div><span>{list.price* quantity}</span>
         </div>
        </div>
      ))}
    </div>
  )

};

export default Product;