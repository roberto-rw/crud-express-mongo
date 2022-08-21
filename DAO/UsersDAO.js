const { userModel } = require("../schemas/usuario-schema");


module.exports = {

    async getUser(nombre) {
        return new Promise((resolve, reject) => userModel.findOne({ nombre: nombre }, (err, docs) => {
                if(err) return reject(err);
                return resolve(docs);
            })
        )
    },

    async getUsers() {
        return new Promise((resolve, reject) => userModel.find({}, (err, docs) => {
                if(err) return reject(err);
                return resolve(docs);
            }))
    },

    async createUser(user){
        return new Promise((resolve, reject) => userModel.create(user, (err, docs) => {
            if(err) return reject(err);
            return resolve(docs);
        }))
    }






}