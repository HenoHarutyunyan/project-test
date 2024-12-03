import { useRef } from "react";
import './Slider2.css';
import { SliderProduct2 } from "../../Utils/Utility";

function Slider2(){
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };
    return(
        <div className="slider-container2">
            <button className="slider-button left2" onClick={scrollLeft}>←</button>
            <div className="slider2" ref={sliderRef}>
                {SliderProduct2.map((item) => (
                    <div className="object2" key={item.id}>
                        
                        <div className='object2-img'>
                        <img src={item.img} alt={item.title} />
                        </div>

                        <div className='object2-container'>
                            
                            <div className='object3-section'>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            </div>
                            
                            <div className='object4-section'>
                            <p className='shop'>{item.shop}</p>
                            <p className='heart'>{item.heart}</p>
                            </div>
                        
                        </div>
                    </div>
                ))}
            </div>
            <button className="slider-button right2" onClick={scrollRight}>→</button>
        </div>
    )
}
export default Slider2