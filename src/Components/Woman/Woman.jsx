import './Woman.css';
import React from 'react';

function Woman({WomanBox, selectedProducts, handleFilter, handleClear }){
  
  const WomanName = [
    { id: 1, title: "Earnings" },
    { id: 2, title: "Bracelets" },
    { id: 3, title: "Pendants" },
    { id: 4, title: "Brooches" },
    { id: 5, title: "Chains" },
    { id: 6, title: "Rings" },
  ];
    
  
  return (
        <div className='woman-container'>
          
          <div className='woman-section-first'>
           
              <div className='woman-ul'>
    
                <div className='woman-1'>
                  {WomanName.map((item)=>(
                    <div className="woman-1Item" key={item.id}>
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
    
              <div className='woman-price'>
               
               <p>Price</p>
                <div className='woman-input'>
                <input type="number" placeholder="Min"/>
                <input type="number" placeholder="Max"/>
                </div>
                
                <div className='woman-button'>
                <button>Filter</button>
                <button onClick={handleClear}>Clear</button>
                </div>
        
              </div>
    
            
          </div>
    
          <div className='woman-section-two'>
          {WomanBox.length > 0 ? (
            WomanBox.map((item) => (
              <div className="woman-page-two" key={item.id}>
                <div className="woman-img">
                  <img src={item.img} alt={item.title} />
                </div>
    
                <div className="woman-container">
                  <div className="woman-title-price">
                    <h3>{item.title}</h3>
                    <p>{item.price}</p>
                  </div>
                  <div className="woman-shop-heart">
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
export default Woman