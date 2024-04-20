// method 1 - using promises


// Function that takes in a request handler and returns a new function that handles promises
const asyncHandler = (requestHandler) => {
    // Return a new function that takes in req, res, and next
    return (req, res, next) => {
        // Use Promise.resolve to convert the result of the request handler into a promise
        // Then use the catch method to handle any errors that occur in the promise chain
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}

// Export the asyncHandler function
export {asyncHandler}

























//method2 - try catch

// //to talk with database with separate util folder
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(error){
//     res.status(err.code || 500).json({
//         success:false,
//         message:err.message || "Internal Server Error"
  
//       })

//     }
// }

