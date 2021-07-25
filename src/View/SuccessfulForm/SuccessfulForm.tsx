import React, {useEffect, useState} from "react";
import MaskedInput, {conformToMask} from 'react-text-mask';
import styles from './SuccessfulForm.module.css'
import {getToken} from "../../helpers/token";
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-spinners/FadeLoader";
import {PHONE_NUMBER_MASK} from "../../const/input";
import {getUserProfile} from "../../store/asyncActions/user";
import {addUserPhone, removeUserPhone} from "../../store/asyncActions/phone";

export const SuccessfulForm = () => {
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState(undefined);
    const token = getToken();
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.loading.isLoading);
    const user = useSelector(state => state.user.user);

    useEffect(() => {
        dispatch(getUserProfile(token))
    }, []);

    function onClickClosingSign () {
        dispatch(removeUserPhone(token, setPhone));
    }

    function onSubmit(event) {
        event.preventDefault();
        setErrors(undefined);
        const phoneNumber = { phoneNumber: getOnlyPhoneNumber() };
        dispatch(addUserPhone(token, phoneNumber, setErrors))
    }

    function getOnlyPhoneNumber() {
        const phoneNumber = phone.split('+7').join('8');
        return phoneNumber.replace(/[^0-9]/g, '');
    }

    function renderLoader() {
        if(isLoading) {
            return (
                <div className={styles.loader}>
                    <Loader color={'#60CEA7'}/>
                </div>
            )
        }

        return <></>
    }

    function getPhoneWithFirstEightFormatted(fullPhone) {
        let phoneWithFirstEight = fullPhone;
        if (typeof phoneWithFirstEight !== 'undefined' && phoneWithFirstEight.length > 0 && phoneWithFirstEight[0] === '8') {
            phoneWithFirstEight = fullPhone.slice(1);
        }

        const conformedPhoneNumber = conformToMask(
            phoneWithFirstEight,
            PHONE_NUMBER_MASK,
            {guide: false}
        );

        // https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#guide
        return conformedPhoneNumber.conformedValue
    }

    function logOut() {
        localStorage.removeItem('token');
        window.location.href='/'
    }

    const {firstName, lastName, email, phoneNumber} = user;
    const isExistPhone = typeof phoneNumber !== 'undefined' && phoneNumber !== '';
    const isShowPhoneForm = !isExistPhone;

    return (
        <div className={styles.main}>
            <div className={styles.button_logout}>
                <button onClick={()=> logOut()}>Log out</button>
            </div>
            <div className={styles.main_block}>
                <div className={styles.title}>Successfull!</div>
                {renderLoader()}
                {isShowPhoneForm && !isLoading && (
                    <>
                        <div className={styles.subtitle}>now enter your phone number</div>

                        <form className={styles.form} onSubmit={onSubmit}>
                            <div className={styles.form_group}>
                                <div>
                                    <MaskedInput
                                        type="text"
                                        className={styles.input}
                                        onChange={event => {
                                            setPhone(event.target.value)
                                        }}
                                        mask={PHONE_NUMBER_MASK}
                                        placeholder={'+7 (***) *** ** **'}
                                        value={phone}
                                    />

                                    <button type='submit' className={styles.button_save}>Save</button>
                                    {errors?.phoneNumber &&
                                    <div className={styles.help_block}>{errors.phoneNumber}</div>
                                    }
                                </div>

                            </div>
                        </form>
                    </>
                )}

                <div className={styles.info_block}>
                    <div className={styles.infoText}>Welcome, {firstName} {lastName}</div>
                    <div className={styles.infoText}>Thank you for choosing us!</div>
                    <div className={styles.infoText}>Check you profile:</div>
                    <div className={styles.infoText}>email: {email}</div>
                    <div className={styles.infoText}>
                        phone: {getPhoneWithFirstEightFormatted(phoneNumber)}
                        {isExistPhone &&
                        <span onClick={() => onClickClosingSign()} className={styles.closing_sign}>&times;</span>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};