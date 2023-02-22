import React from 'react';
import Navbar from '../components/layout/Navbar';

export const Cart = () => {
	return (
		<div>
			<Navbar theme="dark" noOfProductsFromCart={1} />
			<div>Cart</div>
		</div>
	);
};
