import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;

const getWorkshopsByPage = async ( _page ) => {
    const response = await axios.get( `${baseUrl}/workshop`, {
        params: {
            // _page: _page
            _page
        }
    } );
    return response.data;
};

export {
    getWorkshopsByPage
};