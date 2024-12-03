import './AboutInfo.css';
function AboutInfo(){
    return(
        <div className='aboutinfo'>

            <div className='about-P1'>
                <div className='P1'>
                    <h1>About us</h1>
                    <p>Love, abundance, and the radiant 52nd angel Poel symbolize the entire philosophy of our brand.</p>
                    <p>
                    Poel company was founded by Arusyak Stepanian on September 3, 2016, as a call to humanity:
                    Conquer yourself.' Only through this path can you feel and receive the abundant love and light that
                    Poel offers.
                    </p>
                    <p>
                    Icons, initially made of wood, then of gold and silver.
                    Jewelry, now also candles, which carry within the cosmic infinity.
                    The meaning of human existential importance. 
                    <h4>Barev Hayastan</h4>
                    </p>
                </div>
                <div className='P1-image'>
                    <img src="./img/P1.jpg" alt="P1-img" />
                </div>
            </div>

            <div className='about-P2'>
                <div className='P2-image'>
                    <img src="./img/P2.jpg" alt="" />
                </div>
                <div className='P2'>
                   <p>
                   The creation of Poel was Arusyak Stepanian's childhood dream and a divine preordained command
                   from the heavens, which was meant to become a means for the spread of goodness, love, and
                   Christian culture. For Poel, it is important to save from oblivion and offer to society the Christian
                   values, icons, and the tradition of consciously wearing the jewelry inherited from our ancestors.
                   </p>
                   <p>
                   As an intercessor, Poel spreads its wide wings on the path of the superhuman mission of
                   conquering oneself.
                   </p>
                </div>
            </div>


        </div>
        
        
    )
}
export default AboutInfo;