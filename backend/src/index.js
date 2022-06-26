const express = require("express");
require("dotenv").config();
const app = express();

//middleware
app.use(express.json());

app.set('port', 9000);

app.use((req, res, next) => {
    next();
})

app.listen(app.get('port'), () => {
    console.log(`Servidor en linea en el puerto ${app.get('port')}`);
});

app.use(require('./routes/index.js'));
