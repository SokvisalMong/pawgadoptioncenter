import React ,{useEffect}from 'react'
import './shop.css'

const Shop = () => {

  useEffect(() => {
    document.title = "Shop";  
  }, []);

  return (
    <div className='shop_cs'>
      <div className='shop_text'>
        <p>SHOP</p>
      </div>
      <div className='coming_soon'>
        <p>COMING SOON</p>
      </div>
    </div>
  )
}

export default Shop