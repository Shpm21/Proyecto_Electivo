const { Pool } = require('pg');

const credentials = {
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
}

pool = new Pool(credentials);

const getUsers = async (req, res) => {
    try {
        const response = await pool.query('SELECT * FROM usuario');
        res.status(200).json(response.rows);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const createUsers = async (req, res) => {
    try {
        const { nombre_usuario, nombre, apellido, contrasena, fecha_de_nacimiento, edad} = req.body;
        const response = await pool.query('INSERT INTO usuario values ($1, $2, $3, $4, $5, $6)', 
            [nombre_usuario, nombre, apellido, contrasena, fecha_de_nacimiento, edad]);
        console.log(response);
        res.status(200).json({
            message: 'user created successfully',
            body: {
                user: { nombre_usuario, nombre, apellido, contrasena, fecha_de_nacimiento, edad}
            }});
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const getUserByUserName = async (req, res) => {
    try {
        const username = req.params.username;
        const response = await pool.query('SELECT * FROM usuario WHERE nombre_usuario = $1', [username]);
        if (response.rows.length > 0)
            res.status(200).json(response.rows);
        else
            res.status(404).json({
                message: 'user not found'
            })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const deleteUserByUserName = async (req, res) => {
    try {
        const username = req.params.username;
        const response = await pool.query('DELETE FROM usuario WHERE nombre_usuario = $1', [username]);
        console.log(response);
        if (response.rowCount > 0)
            res.status(200).json(`User ${username} was deleted`);
        else
            res.status(404).json({
                message: 'User does not exist'
            })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
        
    }
}

const updateUserByUserName = async (req, res) => {
    try {
        const username = req.params.username;
        const password = req.params.password;
        console.log(req.params)
        //const response = await pool.query('UPDATE usuario SET contrasena = $1 WHERE username = $1', [username]);
        console.log(response);
    } catch (err) {
        
    }
}
module.exports = {
    getUsers, 
    createUsers,
    getUserByUserName,
    deleteUserByUserName,
    updateUserByUserName
}