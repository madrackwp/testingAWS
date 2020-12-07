const express = require('express');


const app = express();

app.get('/', (req, res) => {
    res.send("Welcome to the homepage");
})

app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));