import { DOMAIN } from './';
const productAPI = {};

productAPI.getAll = (page = 1) => {
    return fetch(`${DOMAIN}/product?page=${page}`, {}).then((res) =>
        res.json()
    );
};

export default productAPI;
