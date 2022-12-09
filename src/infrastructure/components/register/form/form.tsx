import { SyntheticEvent, useState } from 'react';
import { User } from '../../../../features/user/model/user.model';

type formData = {
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
};

export function RegisterForm() {
    const initialState: formData = {
        name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
    };

    const [formState, setFormState] = useState(initialState);

    // const { handleRegister } = useUsers();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const registerUser: Partial<User> = {
            ...formState,
        };

        // handleLogin(registerUser);
    };

    return (
        <>
            <div className="form">
                <form /*onSubmit={handleSubmit}*/>
                    <div className="form__name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="form__last_name">
                        <input
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            value={formState.last_name}
                            onInput={handleInput}
                            required
                        />
                    </div>
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
                    <div className="form__phone">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formState.phone}
                            onInput={handleInput}
                            required
                            // minlength="9"
                        />
                    </div>
                    <div className="form__birthday">
                        <input
                            type="date"
                            name="birthday"
                            placeholder="Birthday"
                            value={formState.birthday}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="form__button">
                        REGISTER
                    </button>
                </form>
            </div>
        </>
    );
}
