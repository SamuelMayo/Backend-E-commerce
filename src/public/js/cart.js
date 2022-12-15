
const deleteToCart = (pid, user) => {
    let obj = {pid:pid,
    cid:user }
    fetch('api/cart/deleteProduct',{
        method:'PUT',
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    }).then(result=>result.json()).then(json=>{
        console.log(json)
        document.location.reload()
    })
}


const checkout = (uid) =>{
    let obj = {uid}
    fetch('api/cart/checkout',{
        method:'POST',
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    }).then(result=>result.json()).then(json=>{
        console.log(json)
        if(json.status=='success'){
            alert('Compra realizada exitosamente')
            window.location.replace('/');
        }else{
            alert('Error al realizarla compra')
        }
    })
}