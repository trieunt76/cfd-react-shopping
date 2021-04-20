import React from "react";
import PaymentItem from "./PaymentItem";

const PaymentList = () => {
	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			<div className="row">
				<div className="col-12 col-lg-6">
					{/* Card */}
					<PaymentItem />
				</div>
				<div className="col-12">
					{/* Button */}
					<a
						className="btn btn-block btn-lg btn-outline-border"
						href="account-payment-edit.html"
					>
						Add Payment Method <i className="fe fe-plus" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default PaymentList;
