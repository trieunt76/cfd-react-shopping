import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../../../redux/reducers/authReducer';
import { useFormValidate } from '../../../hooks';

const Login = () => {
    let dispatch = useDispatch();

    const auth = useSelector((state) => state.auth);

    const { form, check, inputChange, error } = useFormValidate(
        {
            email: '',
            password: '',
        },
        {
            rules: {
                email: {
                    required: true,
                    // pattern: 'email',
                },
                password: {
                    required: true,
                },
            },
            messages: {
                email: {
                    required: 'Vui lòng nhập email!',
                    // pattern: 'Email không đúng định dạng!',
                },
                password: {
                    required: 'Vui lòng nhập mật khẩu!',
                },
            },
        }
    );

    const handleLogin = (e) => {
        e.preventDefault();

        let error = check();

        if (Object.keys(error).length === 0) {
            dispatch(fetchLogin(form));
        }
    };

    return (
        <div className="card-body">
            {/* Heading */}
            <h6 className="mb-7">Returning Customer</h6>
            {/* Form */}
            <p className="form-error">{auth.error && auth.error}</p>
            <form>
                <div className="row">
                    <div className="col-12">
                        {/* Email */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="loginEmail">
                                Email Address *
                            </label>
                            <input
                                name="email"
                                onChange={inputChange}
                                className="form-control form-control-sm"
                                id="loginEmail"
                                type="email"
                                placeholder="Email Address *"
                            />
                            {error.email && (
                                <p className="form-error">{error.email}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Password */}
                        <div className="form-group">
                            <label className="sr-only" htmlFor="loginPassword">
                                Password *
                            </label>
                            <input
                                className="form-control form-control-sm"
                                id="loginPassword"
                                type="password"
                                name="password"
                                onChange={inputChange}
                                placeholder="Password *"
                            />
                            {error.password && (
                                <p className="form-error">{error.password}</p>
                            )}
                        </div>
                    </div>
                    <div className="col-12 col-md">
                        {/* Remember */}
                        <div className="form-group">
                            <div className="custom-control custom-checkbox">
                                <input
                                    className="custom-control-input"
                                    id="loginRemember"
                                    type="checkbox"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="loginRemember"
                                >
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-auto">
                        {/* Link */}
                        <div className="form-group">
                            <a
                                className="font-size-sm text-reset"
                                data-toggle="modal"
                                href="#modalPasswordReset"
                            >
                                Forgot Password?
                            </a>
                        </div>
                    </div>
                    <div className="col-12">
                        {/* Button */}
                        <button
                            className="btn btn-sm btn-dark"
                            type="submit"
                            onClick={handleLogin}
                        >
                            Sign In
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;
