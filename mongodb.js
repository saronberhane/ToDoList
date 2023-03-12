const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(() => {
    console.log("mongodb connected");
})
.catch(() => {
    console.log("failed to connect")
})



// creating document for the login database
const LogInSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        require: true
    }
}) 

//define the collection part
const collection = new mongoose.model("Collection1", LogInSchema)

module.exports=collection


// creating document for the signUp database
