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
                    <div className="mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-2 text-xl bg-gray-100"
                            type="text"
                            name="name"
                            placeholder="Name"
                            aria-label="Name"
                            value={formState.name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-2 text-xl bg-gray-100"
                            type="text"
                            name="last_name"
                            placeholder="Last name"
                            aria-label="Last_name"
                            value={formState.last_name}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-2 text-xl bg-gray-100"
                            type="email"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            value={formState.email}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-2 text-xl bg-gray-100"
                            type="password"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            value={formState.password}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-2 text-xl bg-gray-100"
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
                    <div className="mb-4 bg-gray-100 border-b border-gray-400 border-solid">
                        <input
                            className="py-2 text-xl bg-gray-100"
                            type="date"
                            name="birthday"
                            placeholder="Birthday"
                            aria-label="Birthday"
                            value={formState.birthday}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <div className="flex justify-center mt-16 mb-16 text-xl text-white bg-black w-80 h-14">
                        <button type="submit">REGISTER</button>
                    </div>
                </form>
            </div>
        </>
    );
}
