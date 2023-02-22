import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
	const { theme, noOfProductsFromCart } = props;

	const style = { background: '#85b8ed' };
	if (theme == 'dark') style.background = '#375a7f';
	if (theme == 'light') style.background = '#85b8ed';

	return (
		<div className="topnav" style={style}>
			<Link to="/">
				<img id="logo-img" src="src/assets/owl.png" alt="" />
				<span className="orangeText largerFont">Owl</span>
				<span className="greenText largerFont">Books</span>
			</Link>
			<div id="searchForm" className="flexWrapCenter">
				<input type="text" placeholder="Search..." id="search" />
				<i className="fas fa-search centerAbs"></i>
			</div>
			<div>
				<Link className="btn" to="/cart">
					{noOfProductsFromCart > 0 && (
						<span className="btnItems">{noOfProductsFromCart}</span>
					)}
					<i className="fas fa-basket-shopping marginRight positionRelative"></i>
					Basket
				</Link>
				<Link className="btn" to="/admin">
					<i className="fas fa-lock marginRight"></i>Admin
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
