
const AddToCart = (pid, user) => {
    let obj = {pid: pid,
    cid:user }

    fetch('api/cart',{
        method:'PUT',
        body:JSON.stringify(obj),
        headers:{
            "Content-type":"application/json"
        }
    }).then(result=>result.json()).then(json=>console.log(json))
}


