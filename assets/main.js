const moreUsers = document.getElementById('moreUsers');

moreUsers.addEventListener('click',generateUsers);


async function generateUsers(){

    const apiURL = await fetch('https://randomuser.me/api/?results=5');
    const data   = await apiURL.json();
    const users  = data.results;

    const profile_section=document.querySelector('.profile-section');
    const table_section=document.querySelector('.table-section');


     profile_section.innerHTML='';
     table_section.innerHTML='';



}