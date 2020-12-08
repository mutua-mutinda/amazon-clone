import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import LocationOn  from '@material-ui/icons/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{basket}] = useStateValue();
        return (
        <div className="header">
            <Link to="/">
                <img className="header__logo" src="http://pngimg.com/uploads/amazon/amazon_PNG25.png" alt=""/>
            </Link>
            <LocationOn className="header__location"/>
            <div className="header__option">
                <span className="header__optionOne">Deliver to</span>
                <span className="header__optionTwo">Kenya</span>
                </div>
            <div className="header__search">
                <input className="header__searchInput" type="text"/>
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <div className="header__option">
                    <span className="header__optionOne">Hello Mutua</span>
                    <span className="header__optionTwo">Sign In</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Returns</span>
                    <span className="header__optionTwo">& Orders</span>
                </div>

                <div className="header__option">
                    <span className="header__optionOne">Your</span>
                    <span className="header__optionTwo">Prime</span>
                </div>

                <Link to="/checkout">
                <div className="header__optionBasket">
                    <ShoppingBasketIcon />
                    <span className="header__optionTwo header__basketCount">{basket?.length}</span>
                </div>
                </Link>

            </div>
        </div>
    )
}

export default Header
