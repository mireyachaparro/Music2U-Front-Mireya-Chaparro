import { RegisterForm } from '../form/register.form';

function RegisterPage() {
    return (
        <>
            <h2 className="page__title">Personal Details</h2>
            <img
                className="page__logo"
                src="public/assets/favicon.png"
                alt="logo"
            />
            <RegisterForm></RegisterForm>
            <p className="page__paragraph">Already have an account? Sign in</p>
        </>
    );
}

export default RegisterPage;
