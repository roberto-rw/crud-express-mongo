const usersModel = require('../model/UsersModel');
const {request, response} = require('express');


module.exports = {

    logIn(req = request, res = response){
        res.json({msg: 'Login OK'})
    },

    logout(){

    }
}

