import { Link } from 'react-router-dom';
import AddPage from '../../add/page/add.page';
import { LoginForm } from '../form/login.form';

function LoginPage() {
    return (
        <>
            <h2 className="page__title">Login</h2>
            <img
                className="page__logo"
                src="./assets/favicon.png"
                alt="logo"
                width="150px"
            />
            <LoginForm></LoginForm>
            <p>
                <Link to={'/forgot'}>Forgot your password?</Link>
            </p>
            <p className="page__paragraph">
                Don’t have an account?
                <span>
                    <Link to={'/register'}>Sign up</Link>
                </span>
            </p>
            <AddPage></AddPage>
        </>
    );
}

export default LoginPage;
