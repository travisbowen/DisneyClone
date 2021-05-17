import React from "react";
import "../styles/_header.scss";
import logo from "../images/logo.svg";
import homeIcon from "../images/home-icon.svg";
import searchIcon from "../images/search-icon.svg";
import watchlistIcon from "../images/watchlist-icon.svg";
import moviesIcon from "../images/movie-icon.svg";
import seriesIcon from "../images/series-icon.svg";

const Header = (props) => {
	return (
		<nav>
			<a className='logo'>
				<img className='logo' alt='disney+' src={logo}></img>
			</a>
			<div className='nav-menu'>
				<a href='/home'>
					<img alt='home' src={homeIcon} />
					<span>HOME</span>
				</a>
				<a href='/search'>
					<img alt='search' src={searchIcon} />
					<span>SEARCH</span>
				</a>
				<a href='/watchlist'>
					<img alt='watchlist' src={watchlistIcon} />
					<span>WATCHLIST</span>
				</a>
				<a href='/movies'>
					<img alt='movies' src={moviesIcon} />
					<span>MOVIES</span>
				</a>
				<a href='/series'>
					<img alt='series' src={seriesIcon} />
					<span>SERIES</span>
				</a>
			</div>
		</nav>
	);
};

export default Header;
