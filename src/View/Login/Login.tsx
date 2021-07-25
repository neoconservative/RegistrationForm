import React, {useState} from "react";
import styles from './Login.module.css'
import commonStyles from '../../common/style/Error.module.css'
import {ButtonBlock} from "../../components/ButtonBlock/ButtonBlock";
import Loader from "react-spinners/FadeLoader";
import {useDispatch} from "react-redux";
import {Input} from "../../components/Input/Input";
import {logIn} from "../../store/asyncActions/login";

interface Props {
    isSignUpView: boolean;
    setIsSignUpView: (isSignUpView: boolean) => void;
    isLoading: boolean
}

export const Login = (props: Props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(undefined);
    const {isLoading, isSignUpView, setIsSignUpView} = props;
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
            <button type='submit' className={styles.button_login}>LOG IN</button>
        );
    }

    return (
        <>
            <div className={styles.buttons_wrapper}>
                <ButtonBlock isSignUpView={isSignUpView} setIsSignUpView={setIsSignUpView}/>
            </div>
            <div className={styles.title}>Welcome Back!</div>
            <form className={styles.form} onSubmit={(e)=>onSubmitForm(e)}>
                <div className={styles.form_group}>
                    <Input
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        value={email}
                        className={styles.input}
                        placeholder='Email Address'
                        type='email'
                    />
                    {errors?.email &&
                    <div className={commonStyles.help_block}>{errors.email}</div>
                    }
                </div>
                <div className={styles.form_group}>
                    <Input
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        value={password}
                        className={styles.input}
                        placeholder='Set A Password'
                        type='password'
                    />
                    {errors?.password &&
                    <div className={commonStyles.help_block}>{errors.password}</div>
                    }
                </div>
                {renderButton()}
            </form>
        </>
    );
};