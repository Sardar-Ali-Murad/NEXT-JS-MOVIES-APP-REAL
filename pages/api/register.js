// import User from "../../models/User.mjs"
// import { StatusCodes } from 'http-status-codes';
// // import { BadRequestError, UnAuthenticatedError } from '../errors/index.js';
// import db from "../../db/connect.js"
// import attachCookie from "../../utils/attachCookie.js"


// const handler =async (req,res)=>{
//     await db(process.env.MONGO_URL)

//     const { name, email, password } = req.body;
//     // console.log(name,email,password)
  
//     // if (!name || !email || !password) {
//     //   throw new Error('please provide all values');
//     // }
//     // const userAlreadyExists = await User.findOne({ email });
//     // if (userAlreadyExists) {
//     //   throw new Error('Email already in use');
//     // }
//     const user = await User.create({ name, email, password });
  
//     const token = user.createJWT();
//     const oneDay = 1000 * 60 * 60 * 24;
  
//     // res.cookie('token', token, {
//     //   httpOnly: true,
//     //   expires: new Date(Date.now() + oneDay),
//     //   secure: process.env.NODE_ENV === 'production',
//     // });
  
//     // attachCookie({ res, token });
//     res.status(StatusCodes.CREATED).json({
//       user: {
//         email: user.email,
//         lastName: user.lastName,
//         location: user.location,
//         name: user.name,
//       },
  
//       location: user.location,
//     });
//     res.status(StatusCodes.OK).json({msg:"Success"})
// }


// export default handler