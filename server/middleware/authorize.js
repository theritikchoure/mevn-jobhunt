const jwt = require('express-jwt');
const db = require('./../config/mysql');
const customResponse = require('../middleware/response-handler');
const {resMsgType, resMsg} = require('../config/constant');

const secret = "THIS IS USED TO SIGN AND VERIFY JWT TOKENS, REPLACE IT WITH YOUR OWN SECRET, IT CAN BE ANY STRING";

module.exports = authorize;

function authorize() {
    return [
        // authenticate JWT token and attach decoded token to request as req.user
        jwt({ secret, algorithms: ['HS256'] }),

        // attach full user record to request object
        async (req, res, next) => {
            // get user with id from token 'sub' (subject) property
            const user = await db.User.findByPk(req.user.sub);

            // check user still exists
            if (!user)
                // return res.status(401).json({ message: 'Unauthorized' });
                return customResponse(res,401, resMsgType.ERROR,resMsg.TOKEN_EXPIRED, 'Unauthorized');

            // authorization successful
            req.user = user.get();
            next();
        }
    ];
} 