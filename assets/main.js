const moreUsers = document.getElementById('moreUsers');



generateUsers()

moreUsers.addEventListener('click',generateUsers);


async function generateUsers(){

    try{

    const apiURL = await fetch('https://randomuser.me/api/?results=5');
    const data   = await apiURL.json();
    const users  = data.results;

    const profile_section=document.querySelector('.row');
    const table_section=document.querySelector('.table-section tbody');


     profile_section.innerHTML='';
     table_section.innerHTML='';




    users.forEach((user) => {
   
        // adding user card
     const userCard= document.createElement('div');
     userCard.className='col-12 custom-col mb-4'

     userCard.innerHTML=
     ` <div class="card" >
                    <img src="${user.picture.large}" class="card-img-top" alt="${user.name.first} ${user.name.last}">

                    <div class="card-body">
                      <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                      <p class="card-text">${user.email}</p>                      
                    </div>
                </div>
     `;
     
      profile_section.appendChild(userCard);


    //  adding user details in table

    const tableRaw = document.createElement('tr'); 
    tableRaw.innerHTML=
    `
    <td>${user.name.first} ${user.name.last}</td>
     <td>${user.email}</td>
    
    `;
    
    table_section.appendChild(tableRaw);



        
    });
}
catch (e) {
    window.alert(`Something went wrong: ${e.message}`);
}



}

