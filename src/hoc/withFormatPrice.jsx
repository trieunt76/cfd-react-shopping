const withFormatPrice = (WrapComponet, product) => {
    product.real_price_text = new Intl.NumberFormat('vi-VN', {
        currency: 'VND',
    }).format(product.real_price);

    return <WrapComponet {...product} />;
};

export default withFormatPrice;
