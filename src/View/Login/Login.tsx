import React, {useState} from "react";
import commonStyles from '../../common/commonStyle.module.css'
import {useDispatch} from "react-redux";
import {Input} from "../../components/Input/Input";
import {logIn} from "../../store/asyncActions/login";
import {LoaderButton} from "../../components/LoaderButton/LoaderButton";

interface Props {
    isLoading: boolean
}

export const Login = (props: Props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(undefined);
    const {isLoading} = props;
    const dispatch = useDispatch();

    function onSubmitForm(event) {
        event.preventDefault()
        setErrors(undefined);
        dispatch(logIn({email, password}, setErrors));
    }

    return (
        <>
            <h1 className={commonStyles.title}>Welcome Back!</h1>
            <form className={commonStyles.form} onSubmit={(e)=>onSubmitForm(e)}>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    value={email}
                    className={commonStyles.input}
                    placeholder='Email Address'
                    type='email'
                    errorMessage={errors?.email}
                    classNameGroup={commonStyles.form_group}
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    value={password}
                    className={commonStyles.input}
                    placeholder='Set A Password'
                    type='password'
                    errorMessage={errors?.password}
                    classNameGroup={commonStyles.form_group}
                />
                <LoaderButton
                    color={'#60CEA7'}
                    className={commonStyles.button}
                    text="LOG IN"
                    isLoading={isLoading}
                />
            </form>
        </>
    );
};