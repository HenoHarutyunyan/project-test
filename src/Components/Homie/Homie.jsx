import './Homie.css';
import { HomieBox } from '../../Utils/Utility';
function Homie(){
    return(
        <div className='Homie-container'>
          
        <div className='Homie-section-first'>
         
            <div className='Homie-ul'>
  
              <div className='Homie-1'>
                <ul>
                  <li>All</li>
                </ul>
              </div>
              <div className='Homie-2'>
                <ul>
                 <li>
                  <input type="Checkbox"/>
                 </li>
                </ul>
                
              </div>
             
            </div>
  
            <div className='Homie-price'>
             
             <p>Price</p>
              <div className='Homie-input'>
              <input type="number"/>
              <input type="number"/>
              </div>
              
              <div className='Homie-button'>
              <button>Filter</button>
              <button>Clear</button>
              </div>
      
            </div>
  
          
        </div>
  
        <div className='Homie-section-two'>
        {HomieBox.map((item) => (
          <div className='Homie-page-two' key={item.id}>
            
            <div className='Homie-img'>
              <img src={item.img} alt={item.title} />
            </div>
  
            <div className='Homie-container'>
                              
              <div className='Homie-title-price'>
                <h3>{item.title}</h3>
                <p>{item.price}</p>
              </div>
                              
              <div className='Homie-shop-heart'>
                <p>{item.shop}</p>
                <p>{item.heart}</p>
              </div>
                          
            </div>
  
          </div>
         ))}
        </div>
  
      </div>
     
    );
}

export default Homie