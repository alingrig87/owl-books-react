import React from 'react';
import Navbar from '../components/layout/Navbar';

export const Admin = () => {
	return (
		<div>
			<Navbar theme="dark" noOfProductsFromCart={1} />
			<div>Admin</div>
		</div>
	);
};
