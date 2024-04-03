const jwt = require('jsonwebtoken');
const OTP = require('../models/OTP');
const otpGenerator = require('otp-generator');
const User = require('../models/User');
const Profile = require('../models/Profile');
const bcrypt = require('bcrypt');
const mailSender = require('../utils/mailSender');

exports.sendotp = async (req, res) => {

    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
     
        var otp = otpGenerator.generate(4, {
            upperCaseAlphabets: false,
            lowerCaseAlphabets: false,
            specialChars: false,
        });

        const checkOtp = await OTP.findOne({ otp: otp });
        console.log("Result is Generate OTP Func")
        console.log("OTP", otp)
        console.log("Result", checkOtp)

        while (checkOtp) {
            otp = otpGenerator.generate(4, {
                upperCaseAlphabets: false,
            });
        }

        const otpPayload = { email, otp };
        const otpBody = await OTP.create(otpPayload);
        res.status(200).json({
            success: true,
            message: "OTP Sent Successfully",
            otp,
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}


// exports.signUp = async (req, res) => {
//     const { firstName, lastName, email, password, confirmPassword, accountType, otp } = req.body;
//     try {
//         if (!firstName || !lastName || !email || !password | !confirmPassword | !accountType) {
//             return res.status(403).json({
//                 success: false,
//                 message: "Please Fill All The Required Input Fields",
//             });
//         }
//         const checkUser = await User.findOne({ email: email });
//         if (checkUser) {
//             return res.status(403).json({
//                 success: false,
//                 message: "User Already Exists",
//             });
//         }

//         if (password !== confirmPassword) {
//             return res.status(403).json({
//                 success: false,
//                 message: "Passowrds Do Not Match",
//             })
//         }

//         const response = await OTP.find({ otp: otp }).sort({ createdAt: -1 }).limit(1);
//         if (response.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: "Invalid OTP",
//             })
//         }
//         if (response[0].otp != otp) {
//             return res.status(401).json({
//                 success: false,
//                 message: "Invalid OTP",
//             })
//         }


//         const encryptedPassword = await bcrypt.hash(password, 10);

//         let approved = "";
//         approved === "Merchant" ? (approved = false) : (approved = true);


//         const profileDetails = await Profile.create({
//             gender: null,
//             dateOfBirth: null,
//             phone: null,
//             alternatePhone: null,
//             address: null,
//         });

//         const user = await User.create({
//             firstName,
//             lastName,
//             email,
//             password: encryptedPassword,
//             accountType: accountType,
//             approved: approved,
//             additionalDetails: profileDetails._id,
//         });

//         return res.status(200).json({
//             success: true,
//             user,
//             message: "User Created successfully",
//         })

//     } catch (err) {
//         console.log(err);
//         return res.status(500).json({
//             success: false,
//             message: "Internal Server Error",
//         })
//     }
// }

exports.signUp = async (req, res) => {
    try {
        // Destructure fields from the request body
        const {
            email,
            otp,
        } = req.body
        // Check if All Details are there or not
        if (
            !email ||
            !otp
        ) {
            return res.status(403).send({
                success: false,
                message: "All Fields are required",
            })
        }



        // Find the most recent OTP for the email
        const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1)
        console.log(response)
        if (response.length === 0) {
            // OTP not found for the email
            return res.status(400).json({
                success: false,
                message: "The OTP is not valid",
            })
        } else if (otp !== response[0].otp) {
            // Invalid OTP
            return res.status(400).json({
                success: false,
                message: "Incorrect OTP",
            })
        }

        // Check if user already exists
        let user = await User.findOne({ email })
        if (user) {

            const token = jwt.sign(
                { email: user.email, id: user._id, },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h",
                }
            )

            // Save token to user document in database
            user.token = token;
            // Set cookie for token and return success response
            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            }
            return res.cookie("token", token, options).status(200).json({
                success: true,
                token,
                user,
                message: `User Login Success`,
            })
        }

        user = await User.create({
            email,
        });

        const token = jwt.sign(
            { email: user.email, id: user._id, },
            process.env.JWT_SECRET,
            {
                expiresIn: "24h",
            }
        )

        // Save token to user document in database
        user.token = token;
        // Set cookie for token and return success response
        const options = {
            expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
            httpOnly: true,
        }

        res.cookie("token", token, options).status(200).json({
            success: true,
            token,
            user,
            message: "User registered successfully",
        })
    } catch (error) {
        console.error(error)
        return res.status(500).json({
            success: false,
            message: "User cannot be registered. Please try again.",
        })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please Fill All The Required Input Fields",
            });
        }

        const userDetails = await User.findOne({ email }).populate("additionalDetails");
        if (!userDetails) {
            return res.status(401).json({
                success: false,
                message: "User is not registered with us. Please signup first",
            });
        }

        if (await bcrypt.compare(password, userDetails.password)) {
            let token = jwt.sign(
                {
                    id: userDetails._id,
                    email: userDetails.email,
                    accountType: userDetails.accountType,
                },
                process.env.JWT_SECRET,
                {
                    expiresIn: "24h"
                }
            )
            userDetails.token = token;
            userDetails.password = undefined;

            const options = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            };

            res.cookie("token", token, options).status(200).json({
                success: true,
                message: "User Login success",
                token,
                userDetails,
            });
        } else {
            return res.status(401).json({
                success: false,
                message: `Password is incorrect`,
            });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}


exports.changePassword = async (req, res) => {
    const { oldPassword, newPassword, confirmNewPassword } = req.body;
    const userId = req.user.id;
    try {
        const user = await User.findById(userId);
        const isPasswordMatched = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordMatched) {
            return res.status(403).json({
                success: false,
                message: "Incorrect Current Password"
            })
        }

        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords Do Not Match",
            })
        }

        const encryptedPassword = await bcrypt.hash(newPassword, 10);
        const updatedUser = await User.findByIdAndUpdate(userId,
            { password: encryptedPassword },
            { new: true });

        try {
            const mailResponse = await mailSender(
                updatedUser.email,
                "Password Updated Successfully",
                `<p>Password changed for ${updatedUser.email}</p>`
            )
            console.log("Email Sent Successfully");
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                success: false,
                message: "Error occured while sending mail",
            })
        }
        return res.status(200).json({
            success: true,
            message: "Password changed successfully",
            data: updatedUser
        })
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        })
    }
}