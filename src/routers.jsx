import { MainLayout } from './layouts';
import Auth from './pages/Auth';
import Home from './pages/Home';
import Account from './pages/Account';
import Catalog from './pages/Catalog';
import Checkout from './pages/Checkout';
import ComingSoon from './pages/ComingSoon';
import { WithCountdown } from './hoc';
import FAQ from './pages/FAQ';
import StoreLocator from './pages/StoreLocator';

const routers = [
    {
        path: '/coming-soon',
        component: () => {
            return (
                <WithCountdown
                    WrapperComponent={ComingSoon}
                    initialValue={(1 * 24 + 5) * 60 * 60 + 1800}
                />
            );
        },
    },
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
                path: '/faq',
                component: FAQ,
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
            {
                path: '/checkout',
                component: Checkout,
            },
            {
                path: '/store-locator',
                component: StoreLocator,
            },
        ],
    },
];

export default routers;
