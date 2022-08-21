const usersModel = require('../model/UsersModel');
const {request, response} = require('express');


module.exports = {

    async getUsers(req = request, res = response){
        let users;
        try{
            users = await usersModel.getUsers();
        }catch(err){
            res.status(err.status).json({msg: err.message});
        }
        res.send(users);
    },
    
   async createUser(req = request, res = response){
        if(!req.body.username) return res.sendStatus(400);
        if(!req.body.password) return res.sendStatus(400);
        if(!req.body.email) return res.sendStatus(400);
        let user;
        try{
            user = await usersModel.createUser({
                username: req.body.username,
                password: req.body.password,
            email: req.body.email
            });  
        }catch(err){
            res.status(err.status).json({msg: err.message});
        }
        res.sendStatus(200);
    },
    
    async getUser(req = request, res = response){
        const nombre= req.params.nombre;
        if(!nombre) return res.status(400).json({msg: 'nombre vacio'});
        let user;
        try{
            user = await usersModel.getUser(nombre);  
        }catch(err){
            res.status(err.status).json(err.toJson());
        }
        res.send(user);
    },

    async deleteUser(req = request, res = response){
        
    }
}




