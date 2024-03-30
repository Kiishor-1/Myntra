import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { setLoading } from "../../Slices/authSlice"

export function sendOtp(email, navigate) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", "http://localhost:4000/api/v1/auth/sendotp", {
        email,
        checkUserPresent: true,
      })
      console.log("SENDOTP API RESPONSE............", response)

      console.log(response.data.success)

      if (!response.data.success) {
        throw new Error(response.data.message)
      }

      toast.success("OTP Sent Successfully")
      navigate("/verifyEmail")
    } catch (error) {
      console.log("SENDOTP API ERROR............", error)
      toast.error("Could Not Send OTP")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function signUp(email, otp, navigate){
  return async (dispatch)=>{
    const toastId = toast.loading("Loading...");
    dispatch(setLoading(true));
    try{
      const response = await apiConnector("POST", "http://localhost:4000/api/v1/auth/signup",{
        email, otp
      });
      console.log("Signup response", response);
      if (!response.data.success) {
        throw new Error(response.data.message)
      }
      toast.success("Signup Successful")
      navigate("/")
    }catch(error){
      console.log(error);
      toast.error("SingUp Failed");
      navigate("/login");
    }
    dispatch(setLoading(false));
    toast.dismiss(toastId);
  }
}