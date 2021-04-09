let Obj_Recup = localStorage.getItem('Achat');
let Recup_Json = JSON.parse(Obj_Recup);

let Parse_Bis = JSON.parse(localStorage.getItem('Achat'));
let l = Parse_Bis;

console.log(l);

fetch("https://ab-p5-api.herokuapp.com/api/teddies")
.then(res => res.json())
.then(data => {
    
    for(let i = 0; i < l; i++){
        let id = data['_id'];
        let name = data['name'];
        let price = data['price'];
        let desc = data['description'];
        let img = data['imageUrl'];
        let perso = data['colors'];
        
        let Row = document.querySelector('#Row_Card');
    
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
    
        let Perso = document.createElement('p');
        Perso.innerText = perso;
    
        let Btn = document.createElement('a');
        Btn.classList.add('btn_prod', 'mb-4', "p-2");
        Btn.innerText = 'Ajouter au panier';
        Btn.style.border = "1px solid black";
        Btn.style.borderRadius = "15px";
        Btn.style.color = "Black";
        Btn.style.backgroundColor = "white";
        Btn.href = '../Pages/Panier.html#';
    
        Row.appendChild(Card);
        Card.appendChild(Img);
        Card.appendChild(Name);
        Card.appendChild(Desc);
        Card.appendChild(Price);

        console.log(perso);
    }
})
.catch(
    (err) => { alert("Erreur : " + err);
}); 
    

let Btn_Conf = document.querySelector('.Btn');

let Conf = document.createElement('a');
Conf.classList.add('Conf', 'mb-4', "p-2");
Conf.href = '../Pages/Confirmation.html';
Conf.innerText = "Confirmation d'achat";
Conf.style.border = "1px solid black";
Conf.style.borderRadius = "15px";
Conf.style.color = "Black";
Conf.style.backgroundColor = "white";

Btn_Conf.appendChild(Conf);