require('dotenv').config()
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000; 
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/todos', require('./src/routes'));
app.listen(port, () => console.log(`[server]: Listening on port ${port}`));
