
const form = document.getElementById('loginForm');

form.addEventListener('submit', evt => {
    evt.preventDefault();
    let data = new FormData(form);
    let obj = {};
    data.forEach((value, key) => obj[key] = value);
    fetch('api/sessions/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            "Content-type":"application/json"
        }
    }).then(result => result.json()).then(json => {
        console.log(json);
        if(json.status=="success"){
            alert('Logueado con exito')
            window.location.replace('/');
        }else{
            alert('Usuario o contraseña incorrecta');
            form.reset();
        }
    })
})
