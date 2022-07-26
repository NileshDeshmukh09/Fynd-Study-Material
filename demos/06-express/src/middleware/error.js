const apiNotFound = ( req, res, next ) => {
    res.status( 404 ).json();
};

const pageNotFound = ( req, res, next ) => {
    res.render( 'page-not-found', {
        title: req.app.get( 'title' )
    });
};

module.exports = {
    apiNotFound,
    pageNotFound
};