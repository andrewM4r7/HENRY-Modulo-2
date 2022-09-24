
function getFriends(){
    let lista = document.getElementById('lista');
    lista.innerHTML = "";

    //Eliminar el loading

    let img = document.getElementsByTagName('img');

    if(img.length> 0){
        img[0].remove();
    }

    fetch('http://localhost:5000/amigos')  //hace una peticion al servidor
    .then(data => data.json())         //transforma el json recibido en un objeto
    .then(data => {
        data.forEach(amigo => {
            let li = document.createElement('li');
            li.textContent = amigo.name;
            document.getElementById('lista').appendChild(li);
        });
    })
}

//Buscar Amigo por Id
function searchFriend(){

    let id = document.getElementById('input').value;
    fetch('http://localhost:5000/amigos/' + id)
    .then(data => data.json())
    .then(data => {
        document.getElementById('amigo').textContent = data.name;
    })
    document.getElementById('input').value = '';
}


//Borrar amigo

function deleteFriend() {
    let id = document.getElementById('inputDelete').value;
    fetch('http://localhost:5000/amigos/' + id, {
        method: 'DELETE'
    })
    .then(() => {
        alert('El amigo fue borrado')
        getFriends()
    })
    document.getElementById('inputDelete').value = '';
}

document.getElementById('boton').addEventListener('click', getFriends);
document.getElementById('search').addEventListener('click', searchFriend);
document.getElementById('delete').addEventListener('click', deleteFriend);