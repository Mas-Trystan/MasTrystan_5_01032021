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

// let Form = document.querySelector('#Form')

// console.log(Form.Nom);

// let RegexNom = document.querySelectorAll('input[name="Nom"]');

// RegexNom.forEach((RegexNom) => {

//     console.log(RegexNom);

// });

// Form.Email.addEventListener('change', () => {
//     VALIDEMAIL(this);
// })

// const VALIDEMAIL = (inputEmail) => {

//     let RegexEmail = new RegExp ('^[a-zA-Z0-9.-_]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$' , 'g');
    
//     let TestEmail = RegexEmail.test(inputEmail.value);
    
//     console.log(TestEmail);
    
// }


// /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/





// const VERIF_TEXT = document.querySelectorAll("input[name='Nom']");
// let Span_Text = document.querySelectorAll('.Span_Text');

// VERIF_TEXT.forEach((VERIF_TEXT) => {
    
//     console.log(VERIF_TEXT);    
    
// });
// Span_Text.forEach((Span_Text) => {
    
//     console.log(Span_Text);    
    
// });

// for( let i = 0; i < VERIF_TEXT.length ; i++){
    
//     VERIF_TEXT[i].addEventListener('change', () => {
        
//         let Regex_Text = /^[a-zA-Z]+$/;
//         let V = VERIF_TEXT[i];
//         let S = Span_Text[i];
        
//         if(Regex_Text){
            
//             S.innerText = 'Nom Valide';
            
//         }else{
            
//             S.innerText = 'Nom Invalide';
//         }
        
//     });
    
// }

// const VERIF_EMAIL = document.getElementById("Email");
// let Span_Email = document.querySelector('.Span_Email');

// console.log(VERIF_EMAIL);

// VERIF_EMAIL.addEventListener('change', () => {
    
//     let Regex_Text = "^([A-Za-z0-9_\-\.])+\@";
//     let S = Span_Email;
    
//     if(VERIF_EMAIL){
        
//         S.innerText = 'Email Valide';
        
//     }else{

//         S.innerText = 'Email Invalide';

//     }
    
// });

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


// INPUT.forEach((INPUT) => {

//         INPUT.addEventListener('change', () => {

//             let NameConf = localStorage.setItem('Name', INPUT.value);
            
//             for(let i = 0; i < NameConf.length; i++){


//             }
            
//         })

//     console.log(INPUT);

// })

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
// ...................................................ConfAchat......................................................

// Btn_Conf.addEventListener('click', () => {

//     localStorage.getItem('Name', document.querySelector(INPUT));
    
// })