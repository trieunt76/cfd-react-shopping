import React from "react";

const OrderItem = () => {
	return (
		<li className="list-group-item">
			<div className="row align-items-center">
				<div className="col-4 col-md-3 col-xl-2">
					{/* Image */}
					<a href="product.html">
						<img
							src="/img/products/product-6.jpg"
							alt="..."
							className="img-fluid"
						/>
					</a>
				</div>
				<div className="col">
					{/* Title */}
					<p className="mb-4 font-size-sm font-weight-bold">
						<a className="text-body" href="product.html">
							Cotton floral print Dress x 1
						</a>{" "}
						<br />
						<span className="text-muted">$40.00</span>
					</p>
					{/* Text */}
					<div className="font-size-sm text-muted">
						Size: M <br />
						Color: Red
					</div>
				</div>
			</div>
		</li>
	);
};

export default OrderItem;
