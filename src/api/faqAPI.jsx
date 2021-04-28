const faqAPI = {};

faqAPI.getList = () => {
    return fetch(`/api/faq.json`).then((res) => res.json());
};

export default faqAPI;
