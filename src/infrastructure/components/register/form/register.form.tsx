import { SyntheticEvent, useState } from 'react';
import { UserRepository } from '../../../../features/user/services/user.repository';

type formData = {
    name: string;
    last_name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
};

export function RegisterForm() {
    const userRepo = new UserRepository();

    const initialState: formData = {
        name: '',
        last_name: '',
        email: '',
        password: '',
        phone: '',
        birthday: '',
    };

    const [formState, setFormState] = useState(initialState);

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = async (ev: SyntheticEvent) => {
        ev.preventDefault();
        await userRepo.register(formState);
    };

    return (
        <>
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <div className="form__name">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            aria-label="Name"
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
                            aria-label="Last_name"
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
                            aria-label="Email"
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
                            aria-label="Password"
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
                            aria-label="Phone"
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
                            aria-label="Birthday"
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
