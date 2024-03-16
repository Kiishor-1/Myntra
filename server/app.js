const express = require('express');
const app = express();
require('dotenv').config();
const cookieParser = require('cookie-parser');
const {connect} = require('./config/database');
const cors = require('cors');
const userRoutes = require('./routes/User');

connect();
app.use(express.json());
app.use(cookieParser());
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res)=>{
    res.send("Standard root");
});

app.use("/api/v1/auth", userRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, (req, res)=>{
    console.log(`Server is up and running at ${PORT}`);
})