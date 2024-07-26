const express = require("express");
const cors = require('cors');
const sanitizer = require('sanitizer');
const multer = require('multer');

require('dotenv').config();

const routers = require('./routers');

const bodyParser = multer();

const PORT = process.env.PORT || 3000;

const app = express();



app.use(cors({
    origin: "*"
}));

app.use(express.json());

app.use(bodyParser.none());

app.use((req, res, next) => {
    if (req.body) {
        for (let propName in req.body) {
            req.body[propName] = sanitizer.escape(req.body[propName]);
        }
    }
    next();
})

app.use(routers);

app.listen(PORT, () => {
    console.log(`Listening on: http://localhost:${PORT}`);
})