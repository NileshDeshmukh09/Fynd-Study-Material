const logger = ( req, res, next ) => {
    const date = (new Date()).toString();
    const url = req.url;
    const method = req.method;

    // EXERCISE: How to get the IP address??
    // EXERCISE: How to get the user agent from the request header??

    const message = `${method} ${url} | Time: ${date}`;
    console.log( message );

    next();
};

module.exports = logger;