import './ContactInfo.css';
import { Link } from "react-router-dom";

function ContactInfo(){
    return(
        <div className="contactinfo">
        
        <div className="linkicons">
        <i class='bx bxl-instagram-alt'></i>
        <i class='bx bxl-facebook-circle'></i>
        <i class='bx bxl-twitter'></i>
        </div>
        
        <div className="support">
        <div className="contact1">
            <p>Departments</p>
            <ul>
            <Link to='/mans'>
            <li>Mans</li>
            </Link>
            <Link to='/woman'>
            <li>Womans</li>
            </Link>
            <Link to='/kids'>
            <li>Kids</li>
            </Link>
            <Link to='/HomePage'>
            <li>For Home</li>
            </Link>
            
            
            
            </ul>
        </div>
        <div className="contact2">
            <p>Pages</p>
            <ul>
                <Link to='/AboutInfo'>
                <li>About us</li>
                </Link>
                <li>Feedback</li>
                <li>FAQ</li>
            </ul>
        </div>
        <div className="contact3">
            <p>Contact with us</p>
            <ul>
                <li>Poeljewelry@gmail.com</li>
                <li>+37460777888</li>
                <li>Parpeci 17 Yerevan</li>
                <li>Seleznevskaya 4 Moscow</li>
            </ul>
        </div>

        </div>
        
        </div>
    )
}
export default ContactInfo;