import { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsers } from '../../../../features/user/hooks/use.users';

type formData = {
    email: string;
    password: string;
};

export function LoginForm() {
    const [errorLogin, setErrorLogin] = useState(false);

    const initialState: formData = {
        email: '',
        password: '',
    };

    const [formState, setFormState] = useState(initialState);

    const { handleLogin } = useUsers();

    const navigate = useNavigate();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formState);
        if (!localStorage.getItem('token')) {
            setErrorLogin(true);
            return;
        }
        setFormState(initialState);
        navigate('/albums');
    };

    return (
        <>
            <div className="form">
                {errorLogin ? (
                    <>
                        <div className="flex justify-center py-2 bg-red-600">
                            Usuario o contraseña incorrectos
                        </div>
                    </>
                ) : (
                    <></>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-8 bg-gray-100 border-b border-gray-400 border-solid form__email">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="email"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            value={formState.email}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="bg-gray-100 border-b border-gray-400 border-solid form__password">
                        <input
                            className="py-4 text-xl bg-gray-100"
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            value={formState.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-16 mb-8 ">
                        <button
                            type="submit"
                            className="text-xl text-white bg-black w-80 h-14"
                        >
                            LOGIN
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}
