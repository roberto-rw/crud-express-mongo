class AlreadyExistError extends Error{
    constructor(){
        super('El registro ya existe');
        this.name = 'AlreadyExistError';
        this.status = 409;
    }

    toJson(){
        return {
            name: this.name,
            status: this.status,
            message: this.message
        }
    }
}


module.exports = {AlreadyExistError};