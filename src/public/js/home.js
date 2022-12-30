
const AddToCart = (pid, user) => {
    let obj = {
        pid: pid,
        cid: user
    }

    fetch('api/cart', {
        method: 'PUT',
        body: JSON.stringify(obj),
        headers: {
            "Content-type": "application/json"
        }
    }).then(result => result.json()).then(json => console.log(json))
}

const DeleteProduct = (pid, hola) => {
    console.log(hola);
    let obj = { pid }
    fetch('api/products',{
        method: 'DELETE',
        body:JSON.stringify(obj),
        headers:{
            "Content-type": "application/json"
        }
    }).then(result => result.json()).then(json => {
        console.log(json);
        if(json.status==='succes'){
            alert('producto eliminado exitosamente')
            window.location.replace('/');
        }else{
            alert('Error al realizar la eliminacion')
        }})
}