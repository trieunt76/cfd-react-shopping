import React from "react";
import { Pagination } from "../../../../components";
import WishItem from "./WishItem";

const WishList = () => {
	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			{/* Products */}
			<div className="row">
				{/* Item */}
				<WishItem />
				<WishItem />
				<WishItem />
				<WishItem />
				<WishItem />
			</div>
			{/* Pagination */}
			<Pagination />
		</div>
	);
};

export default WishList;
