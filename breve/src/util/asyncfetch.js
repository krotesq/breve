const get = async (url) => {
    const response = await fetch(url, {method: 'GET'});
    return response.json();
}

const post = async (url, body = {}) => {
    const response = await fetch(
        url,
        {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {'Content-type': 'application/json; charset=UTF-8'}
        }
    )
    return response.json();
}


export { get, post }