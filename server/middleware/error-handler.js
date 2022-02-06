module.exports = errorHandler;

const customResponse = require("../middleware/response-handler");
const { resMsgType, resMsg } = require("../config/constant");

function errorHandler(err, req, res, next) {
  console.log(err);
  switch (true) {
    case typeof err === "string":
      // custom application error
      const is404 = err.toLowerCase().endsWith("not found");
      const statusCode = is404 ? 404 : 400;
      // return res.status(statusCode).json({ message: err});
      return customResponse(
        res,
        statusCode,
        resMsgType.ERROR,
        resMsg.NO_DATA_FOUND,
        err
      );

    case err.name === "UnauthorizedError":
      // jwt authentication error
      // return res.status(401).json({ message: 'Unauthorized' });
      return customResponse(
        res,
        401,
        resMsgType.ERROR,
        resMsg.TOKEN_EXPIRED,
        "Unauthorized"
      );

    default:
      // return res.status(500).json({ message: err.message });
      return customResponse(
        res,
        500,
        resMsgType.ERROR,
        resMsg.SWR,
        err.message
      );
  }
}
