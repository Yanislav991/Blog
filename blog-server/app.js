const express = require('express')
const mongoose = require('mongoose')


const app = express()
const blogRouter = require("./routes/BlogRoutes")
const userRouter = require("./routes/UserRoutes")

//configure mongoose

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/BlogApp", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
)

app.use(express.json())
app.use("/api/blogs", blogRouter)
app.use("/api/user", userRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3001");
})

module.exports = app;