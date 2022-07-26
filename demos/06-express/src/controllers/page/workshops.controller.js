const showWorkshops = ( req, res ) => {
    res.render( 'workshops', {
        numWorkshops: 20,
        title: req.app.get( 'title' )
    });
};

module.exports = {
    showWorkshops
};