import { useState } from 'react';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { Link } from 'react-router-dom';
import PhoneInput from 'react-phone-input-2';

const firebaseConfig = {
    apiKey: "AIzaSyCc_UWwGg3sje2n1327NpOP7-MSBnXM4sQ",
    authDomain: "the-pillar-c782c.firebaseapp.com",
    projectId: "the-pillar-c782c",
    storageBucket: "the-pillar-c782c.firebasestorage.app",
    messagingSenderId: "617155671097",
    appId: "1:617155671097:web:a6d2372b8f3cb82a7e09e8",
    measurementId: "G-VZQR6GPZBH"
};
const images = "http://localhost:8080/images/forgetpassword/"

// Initialize Firebase app and auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const ForgetPassword = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
    const [verificationId, setVerificationId] = useState('');
    const [error, setError] = useState('');
    const [otpSent, setOtpSent] = useState(false);

    const setUpRecaptcha = () => {
        if (typeof window !== 'undefined' && !window.recaptchaVerifier) {
            window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
                size: 'normal', // Can also be 'normal'
                callback: (response) => {
                    console.log('reCAPTCHA verified:', response);
                },
                'expired-callback': () => {
                    console.error('reCAPTCHA expired');
                }
            }
        );
        }
    };

    const handleSendCode = async (e) => {
        e.preventDefault();
        setError('');
        setOtpSent(false);
    
        setUpRecaptcha();
    
        try {
            const appVerifier = window.recaptchaVerifier;
            // Ensure reCAPTCHA is rendered before attempting to send OTP
            await window.recaptchaVerifier.render();
            const confirmationResult = await signInWithPhoneNumber(auth, "+" + phoneNumber, appVerifier);
            setVerificationId(confirmationResult.verificationId);
            setOtpSent(true);
        } catch (error) {
            console.error("Error sending OTP:", error);
            setError('Error sending OTP: ' + error.message);
        }
    };

    const handleVerifyCode = async (e) => {
        e.preventDefault();
        try {
            const credential = auth.PhoneAuthProvider.credential(verificationId, verificationCode);
            await auth.signInWithCredential(credential);
            alert('Phone number verified successfully!');
        } catch (error) {
            console.error("Error verifying code:", error);
            setError('Error verifying code: ' + error.message);
        }
    };

    const handlePhoneNumberChange = (value) => {
        setPhoneNumber(value); // Now `phoneNumber` is the plain phone number string
    };
    

    console.log("+" + phoneNumber)

    return (
        <section className="login-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 text-black d-flex align-items-center justify-content-center">
                        <div className="d-flex align-items-center h-custom-2 ">

                            <form>
                                <h3 className="mb-3 pb-3 custom-heading-font">Forgotten password?</h3>
                                <div className="form-outline mb-2">
                                    <p className="custom-p-font text-start small mb-0">
                                        Telefonszám*
                                    </p>
                                    <PhoneInput
                                        className="form-control form-control-lg phone-password-form-control input-phone-number"
                                        country={'hu'}
                                        value={phoneNumber}
                                        onChange={handlePhoneNumberChange}
                                        keyboardType="phone-pad"
                                        require
                                        rules={{
                                            required: "Phone is required",
                                        }}
                                        inputStyle={{
                                            border: "none",
                                            color: "#4b4b4b",
                                        }}
                                        placeholder="Telefonszám"
                                    />
                                </div>

                                <div className="row pt-1 mb-4">
                                    <div className="col">
                                        <a onClick={handleSendCode} className="d-flex default-button">
                                            SEND CODE
                                        </a>
                                    </div>
                                </div>

                                {otpSent && <p className="text-success">OTP sent successfully!</p>}
                                {error && <p className="text-danger">{error}</p>}
                                <div id="recaptcha-container"></div>

                                <p className="custom-p-font small mb-5 pb-lg-2">
                                    Vissza a{" "}
                                    <Link
                                        to="/Login"
                                        className="text-decoration-none register-info"
                                    >
                                        bejelentkezéshez
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>

                    <div className="col-lg-6 px-0 d-none d-lg-block bg-image-vertical">
                        <img
                            src={images + "forget-password.jpg"}
                            alt="Login"
                            className="w-100 vh-100"
                            style={{ objectFit: "cover", objectPosition: "left" }}
                        />
                        <div className="image-shadow"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForgetPassword;