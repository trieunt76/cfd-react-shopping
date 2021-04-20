import { DOMAIN } from './';
const productAPI = {};

productAPI.getAll = () => {
    return fetch(`${DOMAIN}/product`, {}).then((res) => res.json());
};

export default productAPI;
