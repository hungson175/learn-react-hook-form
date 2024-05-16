import React from 'react';
import {useForm} from 'react-hook-form';


const LoginForm = () => {
    const {register, handleSubmit, formState: {errors}, getValues} = useForm();
    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
    };

    return (<form onSubmit={handleSubmit(onSubmit)}>
        <div>
            <label htmlFor="username">Username</label>
            <input
                id="username"
                type="text"
                {...register('username', {required: "Username is required"})}
            />
            {errors.username && <p>{errors.username.message}</p>}
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                {...register('email', {
                    required: "Email is required",
                    pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: 'Invalid email address'
                    },
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}
        </div>

        <div>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                {...register('password',
                    {
                        required: 'Password is required',
                        minLength: {value: 6, message: 'Password must have at least 6 characters'}
                    })}
            />
            {errors.password && <p>{errors.password.message}</p>}
        </div>
        <div>
            <label htmlFor="cf_password">Confirm Password</label>
            <input
                id="cf_password"
                type="password"
                {...register('confirmPassword',
                    {
                        required: 'Confirmation is required',
                        validate: (value) => value === getValues('password') || 'The passwords do not match'
                    })}
            />
            {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>
        <button type={"submit"}>Login</button>
    </form>);
}

export default LoginForm;