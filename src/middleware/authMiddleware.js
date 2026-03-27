// const jwt = require('jsonwebtoken');

// module.exports.authMiddleware = async (req,res, next) => {
//     const {accessToken} = req.cookies
//     // console.log("ddddd...",accessToken);

//     if (!accessToken) {
//         return res.status(409).json({error: 'Please login First' })
//     }
 
//     else{
//         try {
//             const deCodeToken = await jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
//             console.log("deCodeToken data....",deCodeToken);
//             req.role = deCodeToken.role
//             req.id = deCodeToken.id
//             next()
//         } catch (error) {
//             return res.status(409).json({ error: 'Please login' })
//         }
//     }
// };