const express = require('express');

const app = express();

const port = 8080;

const homeRoute = require('./routers/homerouter');
const userRoute = require('./routers/userRoute');
const aboutRoute = require('./routers/aboutRouter');
const productRoute = require('./routers/productRouter');

app.use("/", homeRoute);
app.use("/", userRoute);
app.use("/", aboutRoute);
app.use("/", productRoute);


app.listen(port, () => {
    console.log(`server running on: ${port}`)
})

