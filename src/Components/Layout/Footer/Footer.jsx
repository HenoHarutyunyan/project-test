import './Footer.css';
import { ArrowUpOutlined } from '@ant-design/icons';

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer1"><p>@2023 by Any Ghazaryan</p></div>
            <div className="footer2">
                <p>Back to</p>
                <ArrowUpOutlined />
            </div>
        </div>
    )
}