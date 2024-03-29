let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        // Set Listener
        xhr.open('GET', url_api, true);
        // get listener response
        xhr.onreadystatechange = (() => {
            if (xhr.readyState === 4) {
                (xhr.status === 200)
                ? resolve(JSON.parse(xhr.responseText))
                : reject(new Error('Error', url_api));
            }   
        });
        xhr.send();
    });
}

module.exports = fetchData;