import './Kids.css';
import React from 'react';

function Kids({KidsBox, selectedProducts, handleFilter, handleClear }){
  
  const KidsName = [
    { id: 1, title: "Bracelets" },
    { id: 2, title: "Rings" },
    { id: 3, title: "Pendants" }
  ];



    return(
        <div className='kids-container'>
          
        <div className='kids-section-first'>
         
            <div className='kids-ul'>
  
              <div className='kids-1'>
              {KidsName.map((item)=>(
                  <div className="kids-1Item" key={item.id}>
                  <p>{item.title}</p>
                  <input
                  type="checkbox"
                  checked={selectedProducts.includes(item.title)}
                  onChange={() => handleFilter(item.title)}
                  />
                 </div>
               ))}
              </div>
           </div>
  
            <div className='kids-price'>
             
             <p>Price</p>
              <div className='kids-input'>
              <input type="number" placeholder="Min"/>
              <input type="number" placeholder="Max"/>
              </div>
              
              <div className='kids-button'>
              <button>Filter</button>
              <button onClick={handleClear}>Clear</button>
              </div>
      
            </div>
  
          
        </div>
  
        <div className='kids-section-two'>
        {KidsBox.length > 0 ? (
          KidsBox.map((item) => (
          <div className='kids-page-two' key={item.id}>
            
            <div className='kids-img'>
              <img src={item.img} alt={item.title} />
            </div>
  
            <div className='kids-container'>
                              
              <div className='kids-title-price'>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
                              
              <div className='kids-shop-heart'>
                <p>{item.shop}</p>
                <p>{item.heart}</p>
              </div>
                          
            </div>
  
          </div>
            ))
          ) : (
        
        <p>No products selected</p>
      )}
      </div>
    </div>  
     
    );
    
}
export default Kids