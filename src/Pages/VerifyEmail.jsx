import OTPInput from "react-otp-input"
import { useState, useEffect } from "react";
import OTPImage from '../assets/images/OTP.jpg'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../services/operations/authAPI";

export default function VerifyEmail() {
    const [otp, setOtp] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, signupData } = useSelector((state) => state.auth);
    useEffect(() => {
        // Only allow access of this route when user has filled the signup form
        if (!signupData) {
            navigate("/login");
        }
    }, []);

    const { email } = signupData;

    const handleOTPAandSignUp = (e) => {
        e.preventDefault();
        dispatch(signUp(email, otp, navigate));
    }
    return (
        <div className="w-screen h-[calc(100vh-5rem)] flex justify-center bg-[#ffecf4]">
            {loading ? (<div>
                <div className="spinner"></div>
            </div>) : (
                <div className="w-[25rem] h-[90%] my-[2rem] py-[3rem] px-[3.4rem] bg-white flex flex-col gap-5">
                    <img src={OTPImage} className="w-[7rem]" alt="OTPImage" />
                    <h2 className="text-xl font-semibold">Verify with OTP</h2>
                    <p className="text-[11px]">Sent to example@gmail.com</p>
                    <form onSubmit={handleOTPAandSignUp} className="flex flex-col gap-5">
                        <OTPInput
                            value={otp}
                            onChange={setOtp}
                            numInputs={4}
                            renderSeparator={<span>&nbsp;&nbsp;</span>}
                            renderInput={(props) => <input
                                {...props}
                                className="border w-[3rem] px-2 py-3 focus:outline-none focus:border-black text-center"
                                style={{
                                    boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                                }}
                            />}
                        />
                        <button className="w-[5rem] bg-pink-700 text-white py-[0.3rem] text-center font-bold text-[15px]">Verify</button>
                    </form>
                    <p className="text-[#EF7C8E] font-bold cursor-pointer text-[14px]">Resend OTP</p>
                    <p className="text-[12px]">Log in using <span className="text-[#EF7C8E] font-bold cursor-pointer">Password</span></p>
                    <p className="text-[12px]">Having trouble logging in? <span className="text-[#EF7C8E] font-bold cursor-pointer">Get help</span></p>
                </div>)
            }
        </div>
    )
}
