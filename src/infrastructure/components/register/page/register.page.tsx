import { Link } from 'react-router-dom';
import { RegisterForm } from '../form/register.form';

function RegisterPage() {
    return (
        <>
            <h2 className="page__title">Personal Details</h2>
            <img
                className="page__logo"
                src="./assets/favicon.png"
                alt="logo"
                width="150px"
            />
            <RegisterForm></RegisterForm>
            <p className="page__paragraph">
                Already have an account?
                <span>
                    <Link to={'/'}>Sign in</Link>
                </span>
            </p>
        </>
    );
}

export default RegisterPage;
