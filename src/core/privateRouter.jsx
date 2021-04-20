import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
const PrivateRouter = (props) => {
    const { isLogin } = useSelector((state) => state.auth);

    if (isLogin) {
        return <Route {...props} />;
    }
    return <Redirect to="/auth" />;
};

export default PrivateRouter;
