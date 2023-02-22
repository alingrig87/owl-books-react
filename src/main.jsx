import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/Home';
import { Admin } from './pages/Admin';
import { Cart } from './pages/Cart';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/cart',
		element: <Cart />,
	},
	{
		path: '/admin',
		element: <Admin />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router}>
		<App />
	</RouterProvider>
);
