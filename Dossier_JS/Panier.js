let Obj_Recup = localStorage.getItem('Achat');
let Recup_Json = JSON.parse(Obj_Recup);
let Prix = localStorage.setItem('Prix', 0);

console.log(Recup_Json);

for( let i = 0; i < Recup_Json.length; i++) {
    
    fetch("http://localhost:3000/api/furniture/" + Recup_Json[i])
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        let id = data['_id']; 
        let name = data['name'];
        let price = data['price'];
        let desc = data['description'];
        let img = data['imageUrl'];
        let perso = data['varnish'];

        let Row = document.getElementById('Row_Card');

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
        
        
        Row.appendChild(Card);
        Card.appendChild(Img);
        Card.appendChild(Name);
        Card.appendChild(Desc);
        Card.appendChild(Price);
        
        

    })
};
        let Prix_Actuel = parseInt(localStorage.getItem('Prix'));
        
        localStorage.setItem('Prix', Prix_Actuel + price)
        let Total_Price = document.querySelector('#Total');
        let Total = document.createElement('p');
        Total.classList.add('Prix_Total', 'text-center', 'mt-5');
        Total.innerText = "Total à payer : " + localStorage.getItem('Prix')/100 + '€';

        Total_Price.appendChild(Total);

        console.log(localStorage.getItem('Prix'));


const VERIF_TEXT = document.querySelectorAll("input[name='Nom']");
let Span_Text = document.querySelectorAll('.Span_Text');
let Regex_Text = /[a-zA-Z]/;

console.log(Regex_Text);

for( let i = 0; i < VERIF_TEXT.length ; i++){
    
    VERIF_TEXT.addEventListener('change', () => {
        
        let Verif_T = VERIF_TEXT[i];
        
        if(Regex_Text){
            
            Span_Text.innerHTML = 'Nom valide';

        }else{

            Span_Text.innerHTML = 'Nom invalide';

        }
    console.log(Span_Text);
    })

}


console.log(Span_Text);

let Btn_Conf = document.querySelector('.Btn');

let Conf = document.createElement('a');
Conf.classList.add('Conf', 'mb-4', "p-2", 'mt-5');
Conf.href = '../Pages/Confirmation.html';
Conf.innerText = "Confirmation d'achat";
Conf.style.border = "1px solid black";
Conf.style.borderRadius = "15px";
Conf.style.color = "Black";
Conf.style.backgroundColor = "white";


Btn_Conf.appendChild(Conf);