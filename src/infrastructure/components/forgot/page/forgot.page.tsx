import { ForgotForm } from '../form/form';

function ForgotPage() {
    return (
        <>
            <h2 className="page__title">Forgot password</h2>
            <img
                className="page__logo"
                src="public/assets/favicon.png"
                alt="logo"
            />
            <p className="page__paragraph">
                Please enter your email address. You will recobe a link to
                change a new password.
            </p>
            <ForgotForm></ForgotForm>
        </>
    );
}

export default ForgotPage;
