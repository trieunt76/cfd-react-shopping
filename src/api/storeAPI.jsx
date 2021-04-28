const storeAPI = {};

storeAPI.getList = () => {
    return fetch(`/api/storeLocation.json`).then((res) => res.json());
};

export default storeAPI;
