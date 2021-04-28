import React from 'react';

const StoreItem = ({
    title,
    address,
    phone,
    store_hours,
    border_top,
    onClickItem,
}) => {
    return (
        <div
            onClick={onClickItem}
            className={`card-body ${border_top ? 'border-top' : null}`}
        >
            {/* Heading */}
            <p className="font-weight-bold">{title}</p>
            <p className="text-gray-500">{address}</p>
            <p>
                <strong>Phone:</strong> <br />
                <a className="text-gray-500" href="tel:6-146-389-574">
                    {phone}
                </a>
            </p>
            <p className="mb-0">
                <strong>Store Hours:</strong> <br />
                <span className="text-gray-500">{store_hours}</span>
            </p>
        </div>
    );
};

export default StoreItem;
