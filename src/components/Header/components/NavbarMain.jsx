import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavbarMain = () => {
    let { num } = useSelector((state) => state.cart);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    Shopper.
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                    aria-controls="navbarCollapse"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Collapse */}
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {/* Nav */}
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact={true} to="/">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/catalog">
                                Products
                            </NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav flex-row">
                        <li className="nav-item">
                            <a
                                className="nav-link"
                                data-toggle="modal"
                                href="#modalSearch"
                            >
                                <i className="fe fe-search" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a
                                className="nav-link"
                                href="./account-orders.html"
                            >
                                <i className="fe fe-user" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a
                                className="nav-link"
                                href="./account-wishlist.html"
                            >
                                <i className="fe fe-heart" />
                            </a>
                        </li>
                        <li className="nav-item ml-lg-n4">
                            <a
                                className="nav-link"
                                data-toggle="modal"
                                href="#modalShoppingCart"
                            >
                                <span data-cart-items={num > 0 ? num : null}>
                                    <i className="fe fe-shopping-cart" />
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarMain;
