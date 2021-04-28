import React from 'react';
import { FAQItem } from '.';

const FAQGroup = ({ title, items }) => {
    return (
        <>
            <h5 className="mb-7">{title}:</h5>
            {/* List group */}
            <ul
                className="list-group list-group-flush-x mb-9"
                id="faqCollapseParentOne"
            >
                {items.map((item, index) => {
                    return <FAQItem {...item} number={index + 1} key={index} />;
                })}
            </ul>
        </>
    );
};

export default FAQGroup;
