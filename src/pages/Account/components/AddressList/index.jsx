import React from "react";
import AddressItem from "./AddressItem";

const AddressList = () => {
	return (
		<div className="col-12 col-md-9 col-lg-8 offset-lg-1">
			<div className="row">
				<AddressItem />
				<AddressItem />
				<AddressItem />
				<div className="col-12">
					{/* Button */}
					<a
						className="btn btn-block btn-lg btn-outline-border"
						href="account-address-edit.html"
					>
						Add Address <i className="fe fe-plus" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default AddressList;
