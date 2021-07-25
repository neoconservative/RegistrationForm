import React, {useState} from "react";
import styles from './Login.module.css'
import Loader from "react-spinners/FadeLoader";
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

    function renderButton() {
        if(isLoading) {

            return (
                <div className={styles.loader}>
                    <Loader color={'#60CEA7'}/>
                </div>
            )
        }

        return (
            <LoaderButton className={styles.button_login} text="LOG IN"/>
        );
    }

    return (
        <>
            <div className={styles.title}>Welcome Back!</div>
            <form className={styles.form} onSubmit={(e)=>onSubmitForm(e)}>
                <Input
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    value={email}
                    className={styles.input}
                    placeholder='Email Address'
                    type='email'
                    errorMessage={errors?.email}
                    classNameGroup={styles.form_group}
                />
                <Input
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                    value={password}
                    className={styles.input}
                    placeholder='Set A Password'
                    type='password'
                    errorMessage={errors?.password}
                    classNameGroup={styles.form_group}
                />
                {renderButton()}
            </form>
        </>
    );
};