const express = require('express');
const routes = express.Router();
const userers = [{
        username: 'matheus',
        email: 'teste123123@gmail.com',
        password: '12345678'
    }]
routes.post('/login', (req, res) => {
const {username, email, password} = req.body;
    const user = userers.find(user => user.email === req.body.email && user.password === req.body.password);
if(user){
    return res.status(200).send('Login realizado com sucesso ' + user.username);
}
 return res.status(401).send('Email ou senha inválidos');
}); 
    


module.exports = routes;