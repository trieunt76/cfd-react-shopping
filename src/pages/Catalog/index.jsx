import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProduct } from '../../redux/reducers/productReducer';
import { Pagination } from '../../components';
import {
    Brand,
    Category,
    Color,
    Price,
    Product,
    Season,
    Size,
    Slider,
} from './components';

const Catalog = () => {
    const dispatch = useDispatch();
    const { products } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchAllProduct());
    }, [dispatch]);

    return (
        <section className="py-11">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-3">
                        {/* Filters */}
                        <form className="mb-10 mb-md-0">
                            <ul className="nav nav-vertical" id="filterNav">
                                <Category />
                                <Season />
                                <Size />
                                <Color />
                                <Brand />
                                <Price />
                            </ul>
                        </form>
                    </div>
                    <div className="col-12 col-md-8 col-lg-9">
                        {/* Slider */}
                        <Slider />
                        {/* Header */}
                        <div className="row align-items-center mb-7">
                            <div className="col-12 col-md">
                                {/* Heading */}
                                <h3 className="mb-1">Womens' Clothing</h3>
                                {/* Breadcrumb */}
                                <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                                    <li className="breadcrumb-item">
                                        <a
                                            className="text-gray-400"
                                            href="index.html"
                                        >
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active">
                                        Women's Clothing
                                    </li>
                                </ol>
                            </div>
                            <div className="col-12 col-md-auto">
                                {/* Select */}
                                <select className="custom-select custom-select-xs">
                                    <option selected>Most popular</option>
                                </select>
                            </div>
                        </div>
                        {/* Tags */}
                        {/* <div className="row mb-7">
							<div className="col-12">
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									Shift dresses{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									Summer{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									M{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									White{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									Red{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									Adidas{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									$10.00 - $49.00{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
								<span className="btn btn-xs btn-light font-weight-normal text-muted mr-3 mb-3">
									$50.00 - $99.00{" "}
									<a
										className="text-reset ml-2"
										href="#!"
										role="button"
									>
										<i className="fe fe-x" />
									</a>
								</span>
							</div>
						</div> */}
                        {/* Products */}
                        <div className="row">
                            {products.map((product) => {
                                return (
                                    <Product key={product._id} {...product} />
                                );
                            })}
                        </div>
                        {/* Pagination */}
                        <Pagination />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;
