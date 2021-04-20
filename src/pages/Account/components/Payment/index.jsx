import React from "react";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";

const Payment = () => {
	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			{/* Form */}
			<Step1 />
			{/* Heading */}
			<h6 className="mb-7">Add Debit / Credit Card</h6>
			<Step2 />
		</div>
	);
};

export default Payment;
