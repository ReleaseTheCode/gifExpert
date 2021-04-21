export const getGif = async( category ) => {
    const url = 'https://api.giphy.com/v1/gifs/search?';
    const apiKey = 'api_key=nocx7098gYkuybtCFpzqkQpOVMiAIB9y';
    const limit = 'limit=8';
    const query = 'q='+ encodeURI( category );
    const response = await fetch(`${url}&${apiKey}&${limit}&${query}`);
    const { data } = await response.json();
    const gifs = data.map( ({ id, title, images }) => {
        return { id, title, url:images?.downsized_medium.url }
    });
    return gifs;
};