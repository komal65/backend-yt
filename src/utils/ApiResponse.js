
class ApiResponse{
    // Constructor for the ApiResponse class, which takes in a statusCode, data, and an optional message
    constructor(statusCode,data,message="Success"){
        // The HTTP status code, used to determine if the request was successful or not
        this.statusCode = statusCode;
        // The data returned by the API, can be any data type
        this.data = data;
        // An optional message to provide more context about the response
        this.message = message;
        // A boolean indicating whether the request was successful or not
        this.success = statusCode<400
    }
}