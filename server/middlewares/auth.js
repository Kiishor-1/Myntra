const jwt = require("jsonwebtoken");


exports.auth = (req, res, next) => {
    try {
        const token = req.cookies.token
            || req.body.token
            || req.headers("Authorization").replace("Bearer ", "");

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token is missing"
            });
        }

        try {
            let decode = jwt.verify(token, process.env.JWT_SECRET)
            console.log(decode);
            req.user = decode;
        } catch (err) {
            console.log(err);
            return res.status(401).json({
                success: false,
                message: err.message,
            })
        }
        next();

    } catch (err) {
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong while validating the token",
        })
    }
}

exports.iCustomer = async () => {
    try{
        if(req.user && req.user.accountType === "Customer"){
            next();
        }else{
            return res.status(401).json({
                success:false,
                message:"Registered page for customers",
            })
        }
    }catch(err){
        console.log(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}
exports.isAdmin = async () => {
    try{
        if(req.user && req.user.accountType === "Admin"){
            next();
        }else{
            return res.status(401).json({
                success:false,
                message:"Registered page for admins",
            })
        }
    }catch(err){
        console.log(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}
exports.isMerchant = async () => {
    try{
        if(req.user && req.user.accountType === "Merchant"){
            next();
        }else{
            return res.status(401).json({
                success:false,
                message:"Registered page for merchants",
            })
        }
    }catch(err){
        console.log(err);
        console.log(err);
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
        })
    }
}
