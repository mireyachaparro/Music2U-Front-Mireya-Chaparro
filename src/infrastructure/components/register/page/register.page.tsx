import { Link } from 'react-router-dom';
import { RegisterForm } from '../form/register.form';

function RegisterPage() {
    return (
        <>
            <div className="h-full px-8 pt-20 bg-gray-100">
                <h2 className="text-4xl font-bold page__title">
                    Personal Details
                </h2>
                <div className="flex justify-center p-8 pb-4">
                    <img
                        className="page__logo"
                        src="/assets/logoMusic2u.png"
                        alt="logo"
                        width="150px"
                        height="150px"
                    />
                </div>
                <div className="flex justify-center">
                    <RegisterForm></RegisterForm>
                </div>

                <p className="flex justify-center pb-16 text-base font-medium page__paragraph">
                    Already have an account?
                    <span className="text-gray-500">
                        <Link to={'/'}>Sign in</Link>
                    </span>
                </p>
            </div>
        </>
    );
}

export default RegisterPage;
