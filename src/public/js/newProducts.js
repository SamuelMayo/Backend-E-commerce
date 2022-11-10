
const form = document.getElementById('newProductForm')

form.addEventListener('submit', evt => {
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('api/products', {
        method: 'POST',
        body: data
    }).then(result => result.json()).then(json => {
        console.log(json);
        form.reset()
    })
})