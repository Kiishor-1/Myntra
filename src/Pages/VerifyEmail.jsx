import OTPInput from "react-otp-input"
import { useState } from "react";
import OTPImage from '../assets/images/OTP.jpg'

export default function VerifyEmail() {
    const [otp, setOtp] = useState('');
    return (
        <div className="w-screen h-[calc(100vh-5rem)] flex justify-center bg-[#ffecf4]">
            <div className="w-[25rem] h-[90%] my-[2rem] py-[3rem] px-[3.4rem] bg-white flex flex-col gap-5">
                <img src={OTPImage} className="w-[7rem]" alt="OTPImage" />
                <h2 className="text-xl font-semibold">Verify with OTP</h2>
                <p className="text-[11px]">Sent to 9876543210</p>
                <form action="" className="flex flex-col gap-5">
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
                    <p className="text-[#EF7C8E] font-bold cursor-pointer text-[14px]">Resend OTP</p>
                </form>
                <p className="text-[12px]">Log in using <span className="text-[#EF7C8E] font-bold cursor-pointer">Password</span></p>
                <p className="text-[12px]">Having trouble logging in? <span className="text-[#EF7C8E] font-bold cursor-pointer">Get help</span></p>
            </div>
        </div>
    )
}
