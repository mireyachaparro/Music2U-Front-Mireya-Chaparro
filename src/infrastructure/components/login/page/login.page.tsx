import { Link } from 'react-router-dom';
import { LoginForm } from '../form/login.form';

function LoginPage() {
    return (
        <>
            <h2 className="page__title">Login</h2>
            <img
                className="page__logo"
                src="public/assets/favicon.png"
                alt="logo"
            />
            <LoginForm></LoginForm>
            <p className="page__paragraph">Forgot your password?</p>
            <p className="page__paragraph">
                Don’t have an account?{' '}
                <span>
                    <Link to={'/register/'}>Sign up</Link>
                </span>
            </p>
        </>
    );
}

export default LoginPage;
