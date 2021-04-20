import { Route, Switch } from 'react-router-dom';

const renderRouter = (routers, pathParrent = '') => {
    return (
        <Switch>
            {routers.map((router, index) => {
                let {
                    path,
                    component: Component,
                    routers: childrenRouters,
                    auth,
                } = router;

                if (!path) path = '';
                path = pathParrent + '/' + path;
                path = path.replace(/\/+/g, '/');

                let children = null;
                if (childrenRouters) {
                    children = renderRouters(childrenRouters, path);
                }

                {
                    /* if (auth) {
					return (
						<PrivateRouter
							key={index}
							exact={exact}
							path={path}
							component={(prop) => (
								<Component {...prop}>{children}</Component>
							)}
						/>
					);
				} */
                }

                return (
                    <Route
                        key={index}
                        exact={exact}
                        path={path}
                        component={(prop) => (
                            <Component {...prop}>{children}</Component>
                        )}
                    />
                );
            })}
        </Switch>
    );
};

export default renderRouter;
