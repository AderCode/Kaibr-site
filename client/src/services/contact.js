import * as baseService from './base';

function postContact(data) {
    baseService.makeFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            return response.json();
        }
    })
    .catch((error) => {
        return error;
    });
}

export { postContact };