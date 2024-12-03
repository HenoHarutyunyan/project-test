import './Header.css';
import { SearchOutlined } from '@ant-design/icons';
import { ShoppingOutlined } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useState } from 'react';




export default function Header() {
  
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleIconClick = () => {
    setIsInputVisible(!isInputVisible);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };


  
  return (
    <div className="header">

      <div className="header1">
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

      <Link to="/">
      <div className='Header-logo'>
        <img src='img/reel2.png' alt='logo'/>
      </div>
      </Link>

      <div className="header2">
        <SearchOutlined onClick={handleIconClick}/>
        {isInputVisible && (
        <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search"
        className='searchline'
        />
        )}
        <ShoppingOutlined/>
        <HeartOutlined />
        <p>AMD</p>
        <img src="img/Armenia.png" alt="Armenia" />
        <select className='select'>
          <option value="armenia">Armenia</option>
          <option value="russia">Russian</option>
          <option value="english">English</option>
        </select>
      </div>
    </div>

  )
}