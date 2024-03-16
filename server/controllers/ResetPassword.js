const User = require("../models/User");
const crypto = require('crypto');
const mailSender = require("../utils/mailSender");
const bcrypt = require('bcrypt');

exports.resetPasswordToken = async (req, res) => {
    try {
        const { email } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "No User Found",
            });
        }

        const token = crypto.randomBytes(20).toString("hex");

        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            {
                token: token,
                resetPasswordExpires: Date.now() + 3600000,
            }
        );
        console.log("updateUser details....", updatedUser);

        let url = `http://localhost:3000/${token}`;

        const mailResponse = await mailSender(
            updatedUser.email,
            'Password Reset Initiated',
            `Your reset password link is ${url}. Please note that the link is valid for 1 hour`
        )

        return res.status(200).json({
            success: true,
            message: "Reset Passoword Link Sent. Please check your email"
        })
    } catch (err) {
        console.log(err);
        return res.status(500), json({
            success: false,
            message: "Internal Server Error",
        })
    }
}

exports.resetPassword = async (req, res) => {
    try {
        const { newPassword, confirmNewPassword } = req.body;
        const { token } = req.params;
        const user = await User.findOne({ token: token });
        if (!user) {
            return res.status(403).json({
                success: false,
                message: "Invalid token",
            })
        }
        
        if (!(user.resetPasswordExpires > Date.now())) {
            return res.status(403).json({
                success: false,
                message: `Token is Expired, Please Regenerate Your Token`,
            });
        }

        if (!newPassword || !confirmNewPassword) {
            return res.status(400).json({
                success: false,
                message: "Please Fill All The Required Input Fields",
            })
        }

        if (newPassword !== confirmNewPassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords Do Not Match",
            })
        }

        const encryptedPassword = await bcrypt.hash(newPassword, 10);

        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            { password: encryptedPassword },
            { new: true }
        );

        await mailSender(
            updatedUser.email,
            "Password Reset Success",
            `<p>The password for ${updatedUser.email} has been updated</p>`
        )

        console.log(updatedUser);
        return res.status(200).json({
            success: true,
            message: "Password reset success",
        })
    } catch (err) {
        console.log(err)
        return res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
}