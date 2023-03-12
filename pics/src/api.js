import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID 6dk_CrlCbfD1Vs2yyNd1JrXqD3CIVDeqtMfVkWzI-nA'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;