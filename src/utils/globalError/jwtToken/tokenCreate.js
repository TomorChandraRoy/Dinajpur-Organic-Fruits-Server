// const jwt = require('jsonwebtoken');

// module.exports.tokenCreate = async(data) => {
//     try {
//         const token = jwt.sign(data, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7d' });
//         return token;
//       } 
//       catch (error) {
//         console.error('Error creating token:', error);
//         throw new Error('Token creation failed');
//       }
// };

// jwt.sign ব্যবহার করে একটি টোকেন তৈরি করা হচ্ছে যা data এনকোড করে।
// টোকেন ৭ দিন মেয়াদী হবে এবং ACCESS_TOKEN_SECRET দ্বারা সিকিউরড থাকবে।