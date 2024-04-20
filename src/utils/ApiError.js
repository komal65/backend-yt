// Class representing an API error, extending the built-in Error class
class ApiError extends Error {
    // Constructor for the ApiError class, taking in a status code, message, errors, and stack
    constructor(
        statusCode,
        message="Something Went Wrong",
        errors =[],
        stack=""
    ){
        // Call the constructor of the parent class (Error) with the provided message
        super(message)
        // Set the status code property to the provided status code
        this.statusCode = statusCode
        // Set the errors property to the provided errors
        this.errors = error
        // Set the data property to null
        this.data = null
        // Set the message property to the provided message
        this.message = message
        // Set the success property to the provided errors
        this.success = errors;

        // If a stack is provided, set the stack property to the provided stack
        // Otherwise, use Error.captureStackTrace to generate a stack trace
        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

// Export the ApiError class
export {ApiError}



















// class ApiError extends Error {
//     constructor(
//         statusCode,
//         message="Something Went Wrong",
//         errors =[],
//         stack=""
//     ){
//             super(message)
//             this.statusCode = statusCode
//             this.errors = error
//             this.data=null
//             this.message=message
//             this.success=errors;

//             if(stack){
//                 this.stack = stack
//             }
//             else{
//                 Error.captureStackTrace(this,this.constructor)
//             }
//     }
// }

// export {ApiError}