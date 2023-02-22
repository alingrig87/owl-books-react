import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import axios from 'axios';
import { Product } from '../components/Product';

export const Home = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		axios
			.get('https://632b4aa31090510116d6319b.mockapi.io/books')
			.then((products) => {
				setTimeout(() => {
					setProducts(products.data);
					setLoading(false);
				}, 3000);
			})
			.catch((error) => {
				setLoading(false);
				setIsError(true);
			});
	}, []);

	console.log(loading);
	return (
		<div>
			<Navbar theme="dark" noOfProductsFromCart={1} />
			<div className="bookContainer">
				{loading ? (
					<div>
						<img src="src/assets/spinner.gif" alt="" />
					</div>
				) : isError ? (
					<div>Error</div>
				) : (
					<>
						{products.map((product) => (
							<Product book={product} />
						))}
					</>
				)}
			</div>
		</div>
	);
};
