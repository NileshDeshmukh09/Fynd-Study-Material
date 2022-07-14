import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;

const getWorkshops = async () => {
    const response = await axios.get( `${baseUrl}/workshops` );
    return response.data;
};

export {
    getWorkshops
};