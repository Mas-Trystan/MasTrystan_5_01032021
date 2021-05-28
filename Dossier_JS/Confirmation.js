let Container = document.querySelector('.text-center');

let Parse_Nom = JSON.parse(localStorage.getItem('Name')); 
let Thx_Client = document.createElement('p');
Thx_Client.innerText = 'Merci à vous  ' + Parse_Nom.Nom + ' ' + Parse_Nom.Prenom + ' pour votre achat chez Orinoco :).';

let Parse_Prix = JSON.parse(localStorage.getItem('Prix')); 
let Prix_Fin = document.createElement('p');
Prix_Fin.innerText = 'Le montant total de votre achat est de: ' + Parse_Prix/100 + '€.';

let Parse_Achats = JSON.parse(localStorage.getItem('Achat')); 
let Achats = document.createElement('h2');
Achats.innerText = "Voici votre liste d'achat : ";


Container.appendChild(Thx_Client);
Container.appendChild(Prix_Fin);
Container.appendChild(Achats);

// ................................................CreaDesCartesAchats......................................................

for( let i = 0; i < Parse_Achats.length; i++) {
    
    fetch("http://localhost:3000/api/teddies/" + Parse_Achats[i])
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        let id = data['_id']; 
        let name = data['name'];
        let price = data['price'];
        let desc = data['description'];
        let img = data['imageUrl'];
        
        let Card = document.createElement('div');
        Card.classList.add('Card','shadow-sm', "mt-5", 'text-center');
        Card.style.width = '30%';
        Card.style.marginLeft = "34%";
        Card.style.borderRadius = "25px";
        Card.style.backgroundColor = "white";
        
        let Img = document.createElement('img');
        Img.src = img;
        Img.classList.add('Img_Prod')
        Img.style.width = '100%';
        Img.style.borderRadius = "25px 25px 0 0";
        
        let Name = document.createElement('h3');
        Name.classList.add('p-2')
        Name.textContent = name;
        
        let Price = document.createElement('p');
        Price.textContent = price/100 + ' €';
        
        let Desc = document.createElement('p');
        Desc.classList.add('p-2')
        Desc.textContent = desc;
        
        Container.appendChild(Card);
        Card.appendChild(Img);
        Card.appendChild(Name);
        Card.appendChild(Desc);
        
    })
};