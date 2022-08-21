const usersDAO = require('../DAO/UsersDAO');
const { NotFoundError} = require('../errors/NotFoundError');
const {AlreadyExistError } = require('../errors/AlreadyExistError')


module.exports = {

    async getUser(nombre){
        const user = await usersDAO.getUser(nombre);
        if(!user) throw new NotFoundError();
        return user;   
    },

    async getUsers(){
        return usersDAO.getUsers();
    },

    async createUser(user){
        const newUser = await usersDAO.getUser(user.username);
        if(newUser) throw new AlreadyExistError();
        return usersDAO.createUser(newUser);
    },
}
