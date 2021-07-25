import * as React from 'react';
import styles from './Registration.module.css'
import Loader from "react-spinners/FadeLoader";
import {Input} from "../../components/Input/Input";
import {registration} from "../../store/asyncActions/register";
import {LoaderButton} from "../../components/LoaderButton/LoaderButton";

interface Props {
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
            <LoaderButton className={styles.button_getstarted} text="GET STARTED"/>
        );
    };

    render() {
        const {isLoading} = this.props;
        const {firstName, lastName, email, password, errors} = this.state;

        return (
            <>
                <div className={styles.title}>Sing Up!</div>
                <form className={styles.form} onSubmit={(e)=>this.onSubmitForm(e)}>
                    <div className={styles.input_name_block}>
                        <Input
                            onChange={(e) =>
                                this.setState({
                                    firstName: e.target.value
                                })}
                            disabled={isLoading}
                            value={firstName}
                            className={styles.input_name}
                            placeholder='First Name'
                            type='text'
                            errorMessage={errors?.firstName}
                            classNameGroup={styles.form_group}
                        />
                        <Input
                            onChange={(e) =>
                                this.setState({
                                    lastName: e.target.value
                                })}
                            disabled={isLoading}
                            value={lastName}
                            className={styles.input_name}
                            placeholder='Last Name'
                            type='text'
                            errorMessage={errors?.lastName}
                            classNameGroup={styles.form_group}
                        />
                    </div>
                    <Input
                        onChange={(e) =>
                            this.setState({
                                email: e.target.value
                            })}
                        disabled={isLoading}
                        value={email}
                        className={styles.input}
                        placeholder='Email Address'
                        type='email'
                        errorMessage={errors?.email}
                        classNameGroup={styles.form_group}
                    />
                    <Input
                        onChange={(e) =>
                            this.setState({
                                password: e.target.value
                            })}
                        disabled={isLoading}
                        value={password}
                        className={styles.input}
                        placeholder='Set A Password'
                        type='password'
                        errorMessage={errors?.password}
                        classNameGroup={styles.form_group}
                    />
                    {this.renderButton()}
                </form>
            </>
        );
    }
}