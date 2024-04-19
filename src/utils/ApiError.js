class ApiError extends Error {
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors =[],
        stack=""
    ){
            super(message)
            this.statusCode = statusCode
            this.errors = error
            this.data=null
            this.message=message
            this.success=errors;

            if(stack){
                this.stack = stack
            }
            else{
                Error.captureStackTrace(this,this.constructor)
            }
    }
}

export {ApiError}