import { SyntheticEvent, useState } from 'react';
import { User } from '../../../../features/user/model/user.model';

type formData = {
    email: string;
};

export function ForgotForm() {
    const initialState: formData = {
        email: '',
    };

    const [formState, setFormState] = useState(initialState);

    //para cuando funcione
    // const { handleForgot } = useUsers();

    const handleInput = (ev: SyntheticEvent) => {
        const element = ev.target as HTMLFormElement;
        setFormState({ ...formState, [element.name]: element.value });
    };

    const handleSubmit = (ev: SyntheticEvent) => {
        ev.preventDefault();
        const forgotUser: Partial<User> = {
            ...formState,
        };
        console.log(forgotUser);
        //para cuando funcione
        // handleForgot(forgotUser);
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
                            aria-label="Email"
                            value={formState.email}
                            onInput={handleInput}
                            required
                        />
                    </div>
                    <button type="submit" className="form__button">
                        SEND
                    </button>
                </form>
            </div>
        </>
    );
}
