import React, { useEffect, useState } from 'react';
import faqAPI from '../../api/faqAPI';
import { FAQGroup } from './components';

const FAQ = () => {
    const [FAQ, setFAQ] = useState();

    useEffect(() => {
        faqAPI.getList().then((res) => setFAQ(res));
    }, []);

    console.log(FAQ);

    return (
        <section className="pt-7 pb-12">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-10 col-xl-8">
                        {/* Heading */}
                        <h3 className="mb-10 text-center">
                            Frequently Asked Questionss
                        </h3>
                        {/* Heading */}
                        {FAQ &&
                            FAQ.map((item, index) => {
                                return <FAQGroup {...item} key={index} />;
                            })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
