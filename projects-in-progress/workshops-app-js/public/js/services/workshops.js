import Config from '../config.js';
import { getToken } from './auth.js';

const fetchWorkshops = async ( page ) => {
    const response = await fetch( `${Config.baseUrl}/workshops?` + new URLSearchParams({
        _page: page
    }), {
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    });
    
    // take care of cases when backend returns an error - we need to throw the error from this function ourselves
    if( !response.ok ) {
        const responseText = await response.text(); // get the text error message from the backend
        throw new Error( responseText || 'Some error occured' );
    }

    const workshops = await response.json();
    return workshops;
};

const addWorkshop = async ( workshop ) => {
    const response = await fetch( `${Config.baseUrl}/workshops`, {
        method: 'post',
        body: JSON.stringify( workshop ),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + getToken()
        }
    });

    if( !response.ok ) {
        const responseText = await response.text(); // get the text error message from the backend
        throw new Error( responseText || 'Some error occured' );
    }

    return response.json();
};

const deleteWorkshop = async ( workshopId ) => {
    const response = await fetch( `${Config.baseUrl}/workshops/${workshopId}`, {
        method: 'delete',
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    });

    if( !response.ok ) {
        const responseText = await response.text();
        throw new Error( responseText || 'Some error occured' );
    }
}

export {
    fetchWorkshops,
    addWorkshop,
    deleteWorkshop
}