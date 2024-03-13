// 2nd way to handle this using promises

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export { asyncHandler }











// one way to make function wrapper using async and await

// const asyncHandler = () => { }
// const asyncHandler = (func) => { () => {} }
// const asyncHandler = (func) => () => {} 
// const asyncHandler = (func) => async () => {} 




// const asyncHandler = (fn) => async (req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }