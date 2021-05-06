let url = location.href;
let split_url = url.split('#');
let id_product = split_url[1]
console.log(split_url)

fetch("http://localhost:3000/api/furniture/" + id_product)
.then(res => res.json())
.then(data => {
    console.log(data);

    let id = data['_id'];
    let name = data['name'];
    let price = data['price'];
    let desc = data['description'];
    let img = data['imageUrl'];
    let perso = data['varnish'];
    
    let Row = document.getElementById('row');

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

    let Perso = document.createElement('select');
    Perso.classList.add('Perso');

    for(let i = 0; i < perso.length; i++) {

        let Perso_Option = document.createElement('option');
        Perso_Option.innerText =  perso[i];
        Perso.appendChild(Perso_Option);

    }

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
    Card.appendChild(Perso);
    Card.appendChild(Price);
    Card.appendChild(Btn);

// ................................................BtnClick......................................................

    Btn.addEventListener('click', () => {
        
        if(localStorage.getItem('Achat')){

            let Parse = JSON.parse(localStorage.getItem('Achat')); 
            Parse.push(data['_id']);
            console.log(Parse);
            
            let Obj_String = JSON.stringify(Parse);
            localStorage.setItem('Achat', Obj_String);

        }else{

            let Panier = [
                id = data['_id'],
            ]
            
            let Obj_String = JSON.stringify(Panier);
            localStorage.setItem('Achat', Obj_String);
            
        }
        
    })

});