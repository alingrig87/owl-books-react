import React from 'react';

export const Product = (props) => {
	const { book } = props;
	return (
		<div class="card centerText">
			<img class="bookImage" src={book.book_image} />
			<p class="capitalize blackText">
				<b>${book.title.toLowerCase()}</b>
			</p>
			<p class="blackText">by {book.author}</p>
			<div class="flexWrapCenter">
				<p class="greenText largeFont inline">${book.price}</p>
				{/* <i class="fa fa-info-circle marginRight"></i>Details */}
			</div>
		</div>
	);
};
