import React from 'react';
import { useFormValidate } from '../../hooks';
import { InputGroup } from './components';
import { Features } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { cartUpdate } from '../../redux/reducers/cartReducer';

const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
        currency: 'VND',
    }).format(price);
};

let yearNow = new Date().getFullYear();

const Checkout = () => {
    // Phut thu 10
    let dispatch = useDispatch();
    let { shipping_option, shipping_price, payment_option } = useSelector(
        (state) => state.cart
    );
    console.log('state:', payment_option);

    let { form, error, inputChange, check } = useFormValidate(
        {
            lastName: '',
            firstName: '',
            email: '',
            company: '',
            country: '',
            address_line1: '',
            address_line2: '',
            city: '',
            postcode: '',
            phone: '',
            shipping_option,
            shipping_diff_address: false,
            ship_country: '',
            ship_address1: '',
            ship_address2: '',
            ship_city: '',
            ship_postcode: '',

            payment_option,
            payment_card_number: '',
            payment_card_name: '',
            payment_month: '',
            payment_year: '',
            payment_cvv: '',
            payment_note: '',
        },
        {
            rules: {
                firstName: {
                    required: true,
                },
                lastName: {
                    required: true,
                },
                email: {
                    required: true,
                    pattern: 'email',
                },
                company: {
                    required: true,
                },
                country: {
                    required: true,
                },
                address_line1: {
                    required: true,
                },
                address_line2: {
                    required: true,
                },
                city: {
                    required: true,
                },
                postcode: {
                    required: true,
                },
                phone: {
                    required: true,
                    pattern: 'phone',
                },
                ship_country: {
                    required: true,
                },
                ship_address1: {
                    required: true,
                },
                ship_address2: {
                    required: true,
                },
                ship_city: {
                    required: true,
                },
                ship_postcode: {
                    required: true,
                },
                payment_card_number: {
                    required: true,
                },
                payment_card_name: {
                    required: true,
                },
                payment_cvv: {
                    required: true,
                },
            },
        }
    );

    const onSubmitForm = () => {
        let error;
        let exclude = {};
        if (!form.shipping_diff_address) {
            exclude = {
                ship_country: 1,
                ship_address1: 1,
                ship_address2: 1,
                ship_city: 1,
                ship_postcode: 1,
            };
        }

        if (form.payment_option !== 'credit_card') {
            exclude = {
                ...exclude,
                payment_card_number: 1,
                payment_card_name: 1,
                payment_cvv: 1,
            };
        }
        error = check({ exclude });

        if (Object.keys(error).length === 0) {
            console.log(form);
        }
    };

    const handleShippingOption = (e) => {
        const { value, dataset } = e.target;
        let price = parseInt(dataset.price);
        dispatch(
            cartUpdate({
                shipping_option: value,
                shipping_price: price,
            })
        );
    };

    const handlePayment = (e) => {
        const { value } = e.target;
        dispatch(cartUpdate({ payment_option: value }));
    };

    return (
        <>
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            {/* Heading */}
                            <h3 className="mb-4">Checkout</h3>
                            {/* Subheading */}
                            <p className="mb-10">
                                Already have an account?{' '}
                                <a
                                    className="font-weight-bold text-reset"
                                    href="#!"
                                >
                                    Click here to login
                                </a>
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7">
                            {/* Form */}
                            <form>
                                {/* Heading */}
                                <h6 className="mb-7">Billing Details</h6>
                                {/* Billing details */}
                                <div className="row mb-9">
                                    <div className="col-12 col-md-6">
                                        <InputGroup
                                            title="First name: *"
                                            placeHolder="First name"
                                            name="firstName"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Last Name */}
                                        <InputGroup
                                            title="Last name: *"
                                            placeHolder="Last name"
                                            name="lastName"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {/* Email */}
                                        <InputGroup
                                            title="Email: *"
                                            placeHolder="Email"
                                            name="email"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {/* Company Name */}
                                        <InputGroup
                                            title="Company name: *"
                                            placeHolder="Company name (Optional)"
                                            name="company"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {/* Country */}
                                        <InputGroup
                                            title="Country: *"
                                            placeHolder="Country"
                                            name="country"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 1 */}
                                        <InputGroup
                                            title="Address Line 1: *"
                                            placeHolder="Address Line 1"
                                            name="address_line1"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {/* Address Line 2 */}
                                        <InputGroup
                                            title="Address Line 2: *"
                                            placeHolder="Address Line 2"
                                            name="address_line2"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* Town / City */}
                                        <InputGroup
                                            title="Town / City: *"
                                            placeHolder="Town / City"
                                            name="city"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        {/* ZIP / Postcode */}
                                        <InputGroup
                                            title="ZIP / Postcode: *"
                                            placeHolder="ZIP / Postcode"
                                            name="postcode"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                    <div className="col-12">
                                        {/* Mobile Phone */}
                                        <InputGroup
                                            title="Phone: *"
                                            placeHolder="Phone"
                                            name="phone"
                                            form={form}
                                            error={error}
                                            inputChange={inputChange}
                                        />
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Shipping Details</h6>
                                {/* Shipping details */}
                                <div className="table-responsive mb-6">
                                    <table className="table table-bordered table-sm table-hover mb-0">
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input
                                                            className="custom-control-input"
                                                            id="checkoutShippingStandard"
                                                            name="shipping_option"
                                                            type="radio"
                                                            data-price={30000}
                                                            value="standard"
                                                            onClick={
                                                                handleShippingOption
                                                            }
                                                            checked={
                                                                form.shipping_option ===
                                                                    'standard' ||
                                                                form.shipping_option ===
                                                                    ''
                                                            }
                                                            onChange={
                                                                inputChange
                                                            }
                                                        />
                                                        <label
                                                            className="custom-control-label text-body text-nowrap"
                                                            htmlFor="checkoutShippingStandard"
                                                        >
                                                            Standard Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    Delivery in 5 - 7 working
                                                    days
                                                </td>
                                                <td>$8.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input
                                                            className="custom-control-input"
                                                            id="checkoutShippingExpress"
                                                            name="shipping_option"
                                                            type="radio"
                                                            data-price={40000}
                                                            value="express"
                                                            onClick={
                                                                handleShippingOption
                                                            }
                                                            checked={
                                                                form.shipping_option ===
                                                                'express'
                                                            }
                                                            onChange={
                                                                inputChange
                                                            }
                                                        />
                                                        <label
                                                            className="custom-control-label text-body text-nowrap"
                                                            htmlFor="checkoutShippingExpress"
                                                        >
                                                            Express Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    Delivery in 3 - 5 working
                                                    days
                                                </td>
                                                <td>$12.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input
                                                            className="custom-control-input"
                                                            id="checkoutShippingShort"
                                                            name="shipping_option"
                                                            type="radio"
                                                            onClick={
                                                                handleShippingOption
                                                            }
                                                            data-price={50000}
                                                            value="shipping"
                                                            checked={
                                                                form.shipping_option ===
                                                                'shipping'
                                                            }
                                                            onChange={
                                                                inputChange
                                                            }
                                                        />
                                                        <label
                                                            className="custom-control-label text-body text-nowrap"
                                                            htmlFor="checkoutShippingShort"
                                                        >
                                                            1 - 2 Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    Delivery in 1 - 2 working
                                                    days
                                                </td>
                                                <td>$18.00</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <div className="custom-control custom-radio">
                                                        <input
                                                            className="custom-control-input"
                                                            id="checkoutShippingFree"
                                                            name="shipping_option"
                                                            onClick={
                                                                handleShippingOption
                                                            }
                                                            type="radio"
                                                            data-price={0}
                                                            value="free"
                                                            checked={
                                                                form.shipping_option ===
                                                                'free'
                                                            }
                                                            onChange={
                                                                inputChange
                                                            }
                                                        />
                                                        <label
                                                            className="custom-control-label text-body text-nowrap"
                                                            htmlFor="checkoutShippingFree"
                                                        >
                                                            Free Shipping
                                                        </label>
                                                    </div>
                                                </td>
                                                <td>
                                                    Living won't the He one
                                                    every subdue meat replenish
                                                    face was you morning
                                                    firmament darkness.
                                                </td>
                                                <td>$0.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* Address */}
                                <div className="mb-9">
                                    {/* Checkbox */}
                                    <div className="custom-control custom-checkbox">
                                        <input
                                            className="custom-control-input"
                                            id="checkoutShippingAddress"
                                            type="checkbox"
                                            name="shipping_diff_address"
                                            checked={
                                                form['shipping_diff_address']
                                            }
                                            onChange={inputChange}
                                        />
                                        <label
                                            className="custom-control-label font-size-sm"
                                            data-toggle="collapse"
                                            data-target="#checkoutShippingAddressCollapse"
                                            htmlFor="checkoutShippingAddress"
                                        >
                                            Ship to a different address?
                                        </label>
                                    </div>
                                    {/* Collapse */}
                                    <div
                                        className="collapse"
                                        id="checkoutShippingAddressCollapse"
                                    >
                                        <div className="row mt-6">
                                            <div className="col-12">
                                                {/* Country */}
                                                <InputGroup
                                                    title="Country: *"
                                                    placeHolder="Country"
                                                    name="ship_country"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 1 */}
                                                <InputGroup
                                                    title="Address Line 1: *"
                                                    placeHolder="Address Line 1"
                                                    name="ship_address1"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                {/* Address Line 2 */}
                                                <InputGroup
                                                    title="Address Line 2: *"
                                                    placeHolder="Address Line 2"
                                                    name="ship_address2"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-6">
                                                {/* Town / City */}
                                                <InputGroup
                                                    title="Town / City: *"
                                                    placeHolder="Town / City"
                                                    name="ship_city"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-6">
                                                {/* ZIP / Postcode */}
                                                <InputGroup
                                                    title="ZIP / Postcode: *"
                                                    placeHolder="ZIP / Postcode"
                                                    name="ship_postcode"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                {/* Button */}
                                                <button
                                                    className="btn btn-sm btn-outline-dark"
                                                    type="submit"
                                                >
                                                    Save Address
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Heading */}
                                <h6 className="mb-7">Payment</h6>
                                {/* List group */}
                                <div className="list-group list-group-sm mb-7">
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input
                                                onChange={inputChange}
                                                onClick={handlePayment}
                                                value="credit_card"
                                                checked={
                                                    form.payment_option ===
                                                    'credit_card'
                                                }
                                                className="custom-control-input"
                                                id="checkoutPaymentCard"
                                                name="payment_option"
                                                type="radio"
                                                data-toggle="collapse"
                                                data-action="show"
                                                data-target="#checkoutPaymentCardCollapse"
                                            />
                                            {/* Label */}
                                            <label
                                                className="custom-control-label font-size-sm text-body text-nowrap"
                                                htmlFor="checkoutPaymentCard"
                                            >
                                                Credit Card{' '}
                                                <img
                                                    className="ml-2"
                                                    src="/img/brands/color/cards.svg"
                                                    alt="..."
                                                />
                                            </label>
                                        </div>
                                    </div>
                                    <div
                                        className="list-group-item collapse py-0"
                                        id="checkoutPaymentCardCollapse"
                                    >
                                        {/* Form */}
                                        <div className="form-row py-5">
                                            <div className="col-12">
                                                <InputGroup
                                                    placeHolder="Card Number *"
                                                    name="payment_card_number"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-12">
                                                <InputGroup
                                                    placeHolder="Card Name *"
                                                    name="payment_card_name"
                                                    form={form}
                                                    error={error}
                                                    inputChange={inputChange}
                                                />
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label
                                                        className="sr-only"
                                                        htmlFor="checkoutPaymentMonth"
                                                    >
                                                        Month
                                                    </label>
                                                    <select
                                                        name="payment_month"
                                                        onChange={inputChange}
                                                        className="custom-select custom-select-sm"
                                                        id="checkoutPaymentMonth"
                                                        value={form.payment}
                                                    >
                                                        <option value="1">
                                                            January
                                                        </option>
                                                        <option value="2">
                                                            February
                                                        </option>
                                                        <option value="3">
                                                            March
                                                        </option>
                                                        <option value="4">
                                                            April
                                                        </option>
                                                        <option value="5">
                                                            May
                                                        </option>
                                                        <option value="6">
                                                            June
                                                        </option>
                                                        <option value="7">
                                                            July
                                                        </option>
                                                        <option value="8">
                                                            August
                                                        </option>
                                                        <option value="9">
                                                            September
                                                        </option>
                                                        <option value="10">
                                                            October
                                                        </option>
                                                        <option value="11">
                                                            November
                                                        </option>
                                                        <option value="12">
                                                            December
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="form-group mb-md-0">
                                                    <label
                                                        className="sr-only"
                                                        htmlFor="checkoutPaymentCardYear"
                                                    >
                                                        Year
                                                    </label>
                                                    <select
                                                        className="custom-select custom-select-sm"
                                                        id="checkoutPaymentCardYear"
                                                    >
                                                        {[].map.bind([
                                                            ...Array(50),
                                                        ])((item, index) => {
                                                            return (
                                                                <option
                                                                    value={
                                                                        index +
                                                                        yearNow
                                                                    }
                                                                    key={index}
                                                                >
                                                                    {index +
                                                                        yearNow}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group input-group-merge">
                                                    <input
                                                        className="form-control form-control-sm"
                                                        id="checkoutPaymentCardCVV"
                                                        type="text"
                                                        placeholder="CVV *"
                                                        name="payment_cvv"
                                                        onChange={inputChange}
                                                    />
                                                    <div className="input-group-append">
                                                        <span
                                                            className="input-group-text"
                                                            data-toggle="popover"
                                                            data-placement="top"
                                                            data-trigger="hover"
                                                            data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards."
                                                        >
                                                            <i className="fe fe-help-circle" />
                                                        </span>
                                                    </div>
                                                    {error['payment_cvv'] && (
                                                        <p className="form-error">
                                                            {
                                                                error[
                                                                    'payment_cvv'
                                                                ]
                                                            }
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-group-item">
                                        {/* Radio */}
                                        <div className="custom-control custom-radio">
                                            {/* Input */}
                                            <input
                                                className="custom-control-input"
                                                id="checkoutPaymentPaypal"
                                                name="payment_option"
                                                type="radio"
                                                onClick={handlePayment}
                                                onChange={inputChange}
                                                value="paypal"
                                                checked={
                                                    form.payment_option ===
                                                    'paypal'
                                                }
                                                data-toggle="collapse"
                                                data-action="hide"
                                                data-target="#checkoutPaymentCardCollapse"
                                            />
                                            {/* Label */}
                                            <label
                                                className="custom-control-label font-size-sm text-body text-nowrap"
                                                htmlFor="checkoutPaymentPaypal"
                                            >
                                                <img
                                                    src="/img/brands/color/paypal.svg"
                                                    alt="..."
                                                />
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {/* Notes */}
                                <textarea
                                    className="form-control form-control-sm mb-9 mb-md-0 font-size-xs"
                                    rows={5}
                                    placeholder="Order Notes (optional)"
                                    onChange={inputChange}
                                    name="payment_note"
                                />
                            </form>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
                            {/* Heading */}
                            <h6 className="mb-7">Order Items (3)</h6>
                            {/* Divider */}
                            <hr className="my-7" />
                            {/* List group */}
                            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
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
                                                <a
                                                    className="text-body"
                                                    href="product.html"
                                                >
                                                    Cotton floral print Dress
                                                </a>{' '}
                                                <br />
                                                <span className="text-muted">
                                                    $40.00
                                                </span>
                                            </p>
                                            {/* Text */}
                                            <div className="font-size-sm text-muted">
                                                Size: M <br />
                                                Color: Red
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            {/* Image */}
                                            <a href="product.html">
                                                <img
                                                    src="/img/products/product-10.jpg"
                                                    alt="..."
                                                    className="img-fluid"
                                                />
                                            </a>
                                        </div>
                                        <div className="col">
                                            {/* Title */}
                                            <p className="mb-4 font-size-sm font-weight-bold">
                                                <a
                                                    className="text-body"
                                                    href="product.html"
                                                >
                                                    Suede cross body Bag
                                                </a>{' '}
                                                <br />
                                                <span className="text-muted">
                                                    $49.00
                                                </span>
                                            </p>
                                            {/* Text */}
                                            <div className="font-size-sm text-muted">
                                                Color: Brown
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {/* Card */}
                            <div className="card mb-9 bg-light">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span>{' '}
                                            <span className="ml-auto font-size-sm">
                                                $89.00
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Tax</span>{' '}
                                            <span className="ml-auto font-size-sm">
                                                $00.00
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Shipping</span>{' '}
                                            <span className="ml-auto font-size-sm">
                                                {formatPrice(shipping_price)}{' '}
                                                vnđ
                                            </span>
                                        </li>
                                        <li className="list-group-item d-flex font-size-lg font-weight-bold">
                                            <span>Total</span>{' '}
                                            <span className="ml-auto">
                                                $97.00
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Disclaimer */}
                            <p className="mb-7 font-size-xs text-gray-500">
                                Your personal data will be used to process your
                                order, support your experience throughout this
                                website, and for other purposes described in our
                                privacy policy.
                            </p>
                            {/* Button */}
                            <button
                                onClick={onSubmitForm}
                                className="btn btn-block btn-dark"
                            >
                                Place Order
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Features />
        </>
    );
};

export default Checkout;
