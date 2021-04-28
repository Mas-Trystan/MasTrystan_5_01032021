let Obj_Recup = localStorage.getItem('Achat');
let Recup_Json = JSON.parse(Obj_Recup);

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
        let Prix = localStorage.setItem('Prix', 0);
        
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
        
        let Prix_Actuel = parseInt(localStorage.getItem('Prix'));
        localStorage.setItem('Prix', Prix_Actuel + price)
        
        
        Row.appendChild(Card);
        Card.appendChild(Img);
        Card.appendChild(Name);
        Card.appendChild(Desc);
        Card.appendChild(Price);
        Total_Price.appendChild(Total);
        
        console.log();
        
    })
};

let Total_Price = document.querySelector('#Total');
let Total = document.createElement('p');
Total.classList.add('Prix_Total', 'text-center', 'mt-5');
Total.innerText = "Total à payer : " + localStorage.getItem('Prix')/100  + '€';

console.log(localStorage.getItem('Prix'));

// ................................................VerifForm......................................................

let Form = document.querySelector('#Form');
let Span_Text = document.querySelectorAll('.Span_Text');
let Span_Email = document.querySelector('.Span_Email');
let VerifText = Form.Nom;
let VerifEmail = Form.Email;

console.log(Span_Email);
            
            
for( let i = 0; i < VerifText.length ; i++){

    let V_t = VerifText[i];
    let S = Span_Text[i];
    
    V_t.addEventListener('change', function(){
    
        let Regex_Text = /^[a-zA-Z' ]+$/;
        console.log(Regex_Text.test(this.value));

        if(Regex_Text.test(this.value)){

            S.innerText = 'Nom Valide';

        }else{

            S.innerText = 'Nom Invalide';

        }
    })
    
}
    
VerifEmail.addEventListener('change', function(){
    
    let Regex_Email = /^[a-zA-Z]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
    console.log(Regex_Email.test(this.value));

    if(Regex_Email.test(this.value)){

        Span_Email.innerText = 'Nom Valide';

    }else{

        Span_Email.innerText = 'Nom Invalide';

    }
})
// ................................................StorageInput......................................................

const INPUT_NAME = document.querySelector('#Nom');
const INPUT_PRENOM = document.querySelector('#Prenom');
console.log();


INPUT_NAME.addEventListener('change', () => {
    
    const Inp = {
        Nom: INPUT_NAME.value,
        Prenom: INPUT_PRENOM.value
    }

    localStorage.setItem('Name', JSON.stringify(Inp));

})

// ................................................BtnConfAchat......................................................

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