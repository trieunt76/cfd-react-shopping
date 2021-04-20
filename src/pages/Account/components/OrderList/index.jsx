import React from "react";
import { Pagination } from "../../../../components";
import OrderItem from "./OrderItem";

const OrderList = () => {
	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			<OrderItem />
			<OrderItem />
			<OrderItem />
			{/* Pagination */}
			<Pagination />
		</div>
	);
};

export default OrderList;
