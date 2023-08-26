const button = document.querySelector('#button');
const foto = document.querySelector('#foto');
const name = document.querySelector('#name');
const mail = document.querySelector('#mail');
const phone = document.querySelector('#phone');



const generateUser = async () =>{
    try {
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const date = results[0];

    console.log(date);
    foto.src = date.picture.medium;
    name.textContent = date.name.title + ' ' + date.name.first + ' ' + date.name.last
    mail.textContent = date.email
    phone.textContent = date.phone
    } catch(error) {
        console.log(error);
    }    
}


button.addEventListener('click', generateUser);
document.addEventListener('DOMContentLoaded', generateUser);