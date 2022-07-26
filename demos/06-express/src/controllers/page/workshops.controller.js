const { getAllWorkshops } = require( '../../services/workshops.service' );

const showWorkshops = ( req, res ) => {
    const workshops = getAllWorkshops();
    res.render( 'workshops', {
        workshops,
        title: req.app.get( 'title' )
    });
};

module.exports = {
    showWorkshops
};