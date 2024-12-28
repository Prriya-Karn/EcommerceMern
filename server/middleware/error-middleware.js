const errorMiddleware = (err, req, res, next) => {

    const status = err.status || 400;
    const msg = err.msg || "error from backened";
    const extradetails = err.extradetails ||"error from backened";

    return res.status(status).json({
        msg,
        extradetails
    })

}

module.exports = errorMiddleware;

