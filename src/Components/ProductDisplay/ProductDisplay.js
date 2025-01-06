import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext';


const ProductDisplay = (props) => {
    const {product}=props;
    const {addToCart}=useContext(ShopContext);
     const renderRatingIcons=(rating)=>{
      const stars=[];
      let remainingRating = rating; 
      for(let i=0;i<5;i++){
        if(remainingRating>0.5){
          stars.push(<i key={i} className='bi bi-star-fill'></i>);
          remainingRating--;
        }else if(remainingRating>0 && remainingRating<1){
          stars.push(<i key={"half"} className='bi bi-star-half'></i>);
          remainingRating--;
        }
        else{
          stars.push(<i key={`empty${i}`} className='bi bi-star'></i>);
          remainingRating--;
        }
      }
      return stars;
  
   }; 
  return (
    <div className='productdisplay'>
      <div className='productdisplay-left'>
        <div className='productdisplay-image-list'>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
            <img src={product.image} alt=''/>
        </div>
        <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={product.image} alt=''/>
        </div>
      </div>
      <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplaye-right-star'>
                 
                {renderRatingIcons(product.rating)} 
                <p>{product.rating} Stars</p>
                
            </div>
            <div className='productdisplay-right-prices'>
              <div className='productdisplay-right-price-old'>${product.old_price}</div>
              <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
            Stay cozy and stylish with our premium pullover. Designed for ultimate comfort and versatility, this piece is perfect for layering or wearing on its own.Available in a variety of colors and sizes to suit every wardrobe. Perfect for chilly mornings, cozy evenings, or as a thoughtful gift!
            </div>
            <div className='productdisplay-right-size'>
              <h1>Select Size</h1>
              <div className='productdisplay-right-sizes'>
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button onClick={()=>{
              addToCart(product.id)
            }}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category:</span>{product.category},T-Shirt</p>
            <p className='productdisplay-right-category'><span>Tags:</span>Modern, Latest</p>
      </div>
    </div>
  )
}

export default ProductDisplay
