import axios from 'axios';
import Config from '@/config';

const { baseUrl } = Config;

const vote = async ( sessionId, voteType ) => {
    // in post / put / patch the 2nd argument is
    //      - null (if no data is to be passed)
    //      - the data object if data is to be passed
    // headers, params etc will be in a object (3rd agument)
    const response = await axios.put( `${baseUrl}/sessions/${sessionId}/${voteType}`, null/*, {

    } */);

    return response.data;
};

export {
    vote
};