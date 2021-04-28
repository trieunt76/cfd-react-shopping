import React from 'react';

const FAQItem = ({ ques, ans, number }) => {
    let randomID = 'faq-' + Math.floor(Math.random() * 10000);

    return (
        <li className="list-group-item">
            {/* Toggle */}
            <a
                className="dropdown-toggle d-block font-size-lg font-weight-bold text-reset"
                data-toggle="collapse"
                href={`#${randomID}`}
            >
                {number}. {ques}
            </a>
            {/* Collapse */}
            <div
                className="collapse"
                id={randomID}
                data-parent="#faqCollapseParentOne"
            >
                <div className="mt-5">
                    <p className="mb-0 font-size-lg text-gray-500">{ans}</p>
                </div>
            </div>
        </li>
    );
};

export default FAQItem;
