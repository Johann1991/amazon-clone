import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

/*npm install @mui/icons-material @mui/material @emotion/styled @emotion/react*/

const Header = () => {
  return (
    <header className="header">
      <img
        src="/amazon-logo.png"
        alt="Amazon logo"
      />
      <div className="header_search">
        <input className="header_input" type="text" />
        <SearchIcon className="search_icon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Guests</span>
          <span className="header_optionTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <div className="header_optionBasket">
          <ShoppingBasketIcon className="basket_icon" />
          <span className="header_optionTwo header_basketCount">0</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
