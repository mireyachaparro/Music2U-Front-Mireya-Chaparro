import { SyntheticEvent, useState } from 'react';
import { User } from '../../../../features/user/model/user.model';

type formData = {
    email: string;
    password: string;
};

export function LoginForm() {
    const initialState: formData = {
        email: '',
        password: '',
    };

    const [formState, setFormState] = useState(initialState);

    const { users, handleLogin } = useUsers();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        handleLogin(formState);
        localStorage.setItem('token', users.token);
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form__email">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formState.email}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__password">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formState.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="form__button">
                        LOGIN
                    </button>
                </form>
            </div>
        </>
    );
}
