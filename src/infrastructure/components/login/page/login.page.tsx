import { Link } from 'react-router-dom';
import { LoginForm } from '../form/login.form';

function LoginPage() {
    return (
        <>
            <div className="h-screen px-8 py-20 bg-gray-100">
                <h2 className="text-4xl font-bold page__title">Login</h2>
                <div className="flex justify-center p-8">
                    <img
                        className="page__logo"
                        src="/assets/logo.png"
                        alt="logo"
                        width="150px"
                        height="150px"
                    />
                </div>
                <div className="flex justify-center">
                    <LoginForm></LoginForm>
                </div>
                <p className="flex justify-center pt-10 text-base font-medium page__paragraph">
                    Don’t have an account?
                    <span className="text-gray-500">
                        <Link to={'/register'}> Sign up</Link>
                    </span>
                </p>
            </div>
        </>
    );
}

export default LoginPage;
