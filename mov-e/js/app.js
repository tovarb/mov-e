/*
fetch('https://example.com/profile/avatar', {
        method: 'PUT'
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
*/

const url = `https://api.mercadolibre.com/sites/MLC/search?category=MLA1055`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

const url2 = `https://api.mercadolibre.com/sites/MLC/categories/all`;

fetch(url2)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));

const url3 = `https://api.mercadolibre.com/sites/MLC/categories/MLC1748`;

fetch(url3)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));