import React, { useState, useEffect } from 'react';
import { storeAPI } from '../../api';
import StoreItem from './components/StoreItem';

const StoreLocator = () => {
    const [store, setStore] = useState();
    const [titleIframe, setTitleIframe] = useState('');

    useEffect(() => {
        storeAPI.getList().then((res) => setStore(res.data));
    }, []);

    let [iframe, setIframe] = useState(
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.6882032740336!2d108.24554851473059!3d15.97765098893757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421085dcd59fa3%3A0xdae26642138ecfde!2zTmFtIEvhu7MgS2jhu59pIE5naMSpYSwgSMOyYSBRdcO9LCBOZ8WpIEjDoG5oIFPGoW4sIMSQw6AgTuG6tW5nIDU1MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1619575001029!5m2!1sen!2s'
    );

    function onClickItem(i) {
        console.log(i);
        console.log('click');
        setIframe(store[i].link);
        setTitleIframe(store[i].title);
    }

    return (
        <>
            {/* HEADER */}
            <section className="pt-7 pb-12">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-8 col-xl-6">
                            {/* Heading */}
                            <h3 className="mb-10 text-center">Store Locator</h3>
                            {/* Search */}
                            <div className="input-group input-group-merge">
                                <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Enter Country or City"
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-outline-border"
                                        type="submit"
                                    >
                                        <i className="fe fe-search" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* MAP */}
            <section className="py-12 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 col-lg-4">
                            {/* Card */}
                            <div
                                className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0 shadow"
                                style={{ overflow: 'auto' }}
                            >
                                {store &&
                                    store.map((item, index) => {
                                        return (
                                            <StoreItem
                                                {...item}
                                                onClickItem={onClickItem.bind(
                                                    null,
                                                    index
                                                )}
                                                key={index}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                        <div className="col-12 col-md-7 col-lg-8">
                            {/* Map */}
                            <div className="embed-responsive embed-responsive-4by3">
                                <iframe
                                    src={iframe}
                                    allowfullscreen=""
                                    loading="lazy"
                                    title={titleIframe}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default StoreLocator;
