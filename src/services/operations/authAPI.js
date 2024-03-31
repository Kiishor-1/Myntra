import toast from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import { setLoading, setToken } from "../../Slices/authSlice"
import { setUser } from "../../Slices/profileSlice"


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
      // toast.success("Signup Successful")
      // navigate("/")
      toast.success(response.data.message);
      dispatch(setToken(response.data.token))
      // const userImage = response.data?.user?.image
      //   ? response.data.user.image
      //   : `https://api.dicebear.com/5.x/initials/svg?seed=${response.data.user.firstName} ${response.data.user.lastName}`
      dispatch(setUser({ ...response.data.user, }))
      localStorage.setItem("token", JSON.stringify(response.data.token))
      localStorage.setItem("user", JSON.stringify(response.data.user))
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

export function logout(navigate) {
  return (dispatch) => {
    dispatch(setToken(null))
    dispatch(setUser(null))
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    toast.success("Logged Out")
    navigate("/")
  }
}