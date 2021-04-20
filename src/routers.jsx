import { MainLayout } from './layouts';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Account from './pages/Account';
import Catalog from './pages/Catalog';

const routers = [
    {
        path: '/',
        component: MainLayout,
        routers: [
            {
                path: '/',
                exact: true,
                component: Home,
            },
            {
                path: '/auth',
                component: Auth,
            },
            {
                path: '/account',
                component: Account,
                auth: true,
            },
            {
                path: '/catalog',
                component: Catalog,
            },
        ],
    },
];

export default routers;
