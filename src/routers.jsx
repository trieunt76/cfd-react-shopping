import { MainLayout } from './layouts';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Account from './pages/Account';

const routers = [
    {
        path: '/',
        component: MainLayout,
        routers: [
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
                path: '/',
                exact: true,
                component: Home,
            },
        ],
    },
];

export default routers;
