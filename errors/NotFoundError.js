class NotFoundError extends Error{
    constructor(){
        super('No se encontro el recurso');
        this.name = 'NotFoundError';
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


module.exports = {NotFoundError};