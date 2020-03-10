const express = require("express");
const app = express();
const PORT: string | number = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`server started in port  ${PORT}`)
})