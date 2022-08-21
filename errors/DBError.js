class DBError extends Error{

    constructor(){
        super('No se pudo conectar a la base de datos');
        this.name = 'DBError';
        this.status = 404;
    }

    toJson(){
        return {
            name: this.name,
            status: this.status,
            message: this.message
        }
    }
}

module.exports = {DBError};