import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search'; 
import ShoppingBasketIcon  from '@material-ui/icons/ShoppingBasket';
import LocationOn  from '@material-ui/icons/LocationOnOutlined';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const [{basket}, {user}] = useStateValue();
    console.log(basket)

    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }

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
                <Link to="/login" style={{textDecoration: 'none'}}>
                <div className="header__option">
                    <span className="header__optionOne">Hello {user?.email}</span>
                    <span onClick={handleAuthentication} className="header__optionTwo">{user? "Sign Out": "Sign In"}</span>
                </div>
                </Link>

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
