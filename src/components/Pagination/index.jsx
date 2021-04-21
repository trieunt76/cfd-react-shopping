import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';

const Pagination = ({ count, totalPage, currentPage, nextPage, perPage }) => {
    const { path } = useRouteMatch();

    const renderPage = () => {
        let start = currentPage - 1;

        if (start < 1) start = 1;

        let end = currentPage + 4;
        if (end > totalPage) {
            end = totalPage;
            start = end - 4;
        }

        let list = [];

        for (let i = start; i <= end; i++) {
            list.push(
                <li
                    className={`page-item ${currentPage === i && 'active'} `}
                    key={i}
                >
                    <NavLink className="page-link" to={`${path}?page=${i}`}>
                        {i}
                    </NavLink>
                </li>
            );
        }

        return list;
    };

    return (
        <nav className="d-flex justify-content-center justify-content-md-end mt-10">
            <ul className="pagination pagination-sm text-gray-400">
                {currentPage > 1 && (
                    <li className="page-item">
                        <Link
                            className="page-link page-link-arrow"
                            to={`${path}?page=${currentPage - 1}`}
                        >
                            <i className="fa fa-caret-left" />
                        </Link>
                    </li>
                )}

                {renderPage()}
                {currentPage < totalPage && (
                    <li className="page-item">
                        <Link
                            className="page-link page-link-arrow"
                            to={`${path}?page=${currentPage + 1}`}
                        >
                            <i className="fa fa-caret-right" />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Pagination;
