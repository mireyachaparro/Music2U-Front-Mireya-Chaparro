import { ForgotForm } from '../form/forgot.form';

function ForgotPage() {
    return (
        <>
            <h2 className="page__title">Forgot password</h2>
            <img
                className="page__logo"
                src="/assets/favicon.png"
                alt="logo"
                width="150px"
                height="150px"
            />
            <p className="page__paragraph">
                Please enter your email address. You will receive a link to
                change a new password.
            </p>
            <ForgotForm></ForgotForm>
        </>
    );
}

export default ForgotPage;
