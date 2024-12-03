import './Slider1.css';
import { useRef } from 'react';
import { SliderProduct1 } from '../../Utils/Utility';


function Slider1() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -250, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 250, behavior: 'smooth' });
    };

    return (
        <div className="slider-container">
            <button className="slider-button left" onClick={scrollLeft}>←</button>
            <div className="slider1" ref={sliderRef}>
                {SliderProduct1.map((item) => (
                    <div className="object1" key={item.id}>
                        
                        <div className='object1-img'>
                        <img src={item.img} alt={item.title} />
                        </div>

                        <div className='object1-container'>
                            
                            <div className='object1-section'>
                            <h3>{item.title}</h3>
                            <p>{item.price}</p>
                            </div>
                            
                            <div className='object2-section'>
                            <p>{item.shop}</p>
                            <p>{item.heart}</p>
                            </div>
                        
                        </div>

                    </div>
                ))}
            </div>
            <button className="slider-button right" onClick={scrollRight}>→</button>
        </div>
    );
}

export default Slider1;
