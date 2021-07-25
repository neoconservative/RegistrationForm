import * as React from 'react';
import styles from './Registration.module.css'
import commonStyles from '../../common/style/Error.module.css'
import {ButtonBlock} from "../../components/ButtonBlock/ButtonBlock";
import Loader from "react-spinners/FadeLoader";
import {Input} from "../../components/Input/Input";
import {registration} from "../../store/asyncActions/register";

interface Props {
    isSignUpView: boolean;
    setIsSignUpView: (isSignUpView: boolean) => void;
    isLoading: boolean
    dispatch: any
}

interface State {
    firstName: string;
    lastName:  string;
    email:  string;
    password:  string;
    errors:  any;
}

export class Registration extends React.Component<Props, State> {
    constructor(props) {
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            errors: undefined,
        };
    }

    setErrorsState = (errors) => {
        this.setState({
            errors: errors
        })
    };

    onSubmitForm(event) {
        event.preventDefault();
        this.setState({
            errors: undefined
        });
        const data = this.state;
        this.props.dispatch(registration(data, this.setErrorsState));
    };

    renderButton = () => {
        const {isLoading} = this.props;

        if(isLoading) {
            return (
                <div className={styles.loader}>
                    <Loader color={'#60CEA7'}/>
                </div>
            )
        }
        return (
            <button type='submit' className={styles.button_getstarted}>GET STARTED</button>
        );
    };


    render() {
        const {isSignUpView, setIsSignUpView, isLoading} = this.props;
        const {firstName, lastName, email, password, errors} = this.state;

        return (
            <>
                <div className={styles.buttons_wrapper}>
                    <ButtonBlock isSignUpView={isSignUpView} setIsSignUpView={setIsSignUpView}/>
                </div>
                <div className={styles.title}>Sing Up!</div>
                <form className={styles.form} onSubmit={(e)=>this.onSubmitForm(e)}>
                    <div className={styles.input_name_block}>
                        <div className={styles.form_group}>
                            <Input
                                onChange={(e) =>
                                this.setState({
                                    firstName: e.target.value
                                })}
                                value={firstName}
                                disabled={isLoading}
                                className={styles.input_name}
                                placeholder='First Name'
                                type='text'
                            />
                            {errors?.firstName &&
                            <div className={commonStyles.help_block}>{errors.firstName}</div>
                            }
                        </div>
                        <div className={styles.form_group}>
                            <Input
                                onChange={(e) =>
                                    this.setState({
                                        lastName: e.target.value
                                    })}
                                disabled={isLoading}
                                value={lastName}
                                className={styles.input_name}
                                placeholder='Last Name*'
                                type='text'/>
                            {errors?.lastName &&
                            <div className={commonStyles.help_block}>{errors.lastName}</div>
                            }
                        </div>
                    </div>
                    <div className={styles.form_group}>
                        <Input
                            onChange={(e) =>
                                this.setState({
                                    email: e.target.value
                                })}
                            disabled={isLoading}
                            value={email}
                            className={styles.input}
                            placeholder='Email Address*'
                            type='email'
                        />
                        {errors?.email &&
                        <div className={commonStyles.help_block}>{errors.email}</div>
                        }
                    </div>
                    <div className={styles.form_group}>
                        <Input
                            onChange={(e) =>
                                this.setState({
                                    password: e.target.value
                                })}
                            disabled={isLoading}
                            value={password}
                            className={styles.input}
                            placeholder='Set A Password*'
                            type='password'
                        />
                        {errors?.password &&
                        <div className={commonStyles.help_block}>{errors.password}</div>
                        }
                    </div>
                    {this.renderButton()}
                </form>
            </>
        );
    }
}