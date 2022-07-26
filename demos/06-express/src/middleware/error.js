const pageNotFound = ( req, res, next ) => {
    res.render( 'page-not-found', {
        title: req.app.get( 'title' )
    });
};

module.exports = {
    pageNotFound
};