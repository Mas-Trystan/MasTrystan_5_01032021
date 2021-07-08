// ................Index..............

export function displayData(data) {
  for (let i = 0; i < data.length; i++) {
    let container = document.getElementById("row");

    let col = document.createElement("div");
    col.classList.add("Col");

    let card = document.createElement("div");
    card.classList.add("Card", "shadow-sm", "text-center");

    let img = document.createElement("img");
    img.src = data[i]["imageUrl"];
    img.classList.add("Img");

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    let name = document.createElement("h3");
    name.innerText = data[i]["name"];

    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    cardText.innerText = data[i]["description"];

    let ctaBlock = document.createElement("div");
    ctaBlock.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );

    let btnGroup = document.createElement("div");
    btnGroup.classList.add("btn-group");

    let btn = document.createElement("a");
    btn.classList.add("btn", "btn-sm", "btn-outline-secondary", "btn_buy");
    btn.innerText = "Voir produit";
    btn.href = "Frontend/Pages/Produit.html" + "#" + data[i]["_id"];

    let price = document.createElement("small");
    price.classList.add("text-muted");
    price.innerText = data[i]["price"] / 100 + " €";

    ctaBlock.appendChild(btnGroup);
    btnGroup.appendChild(btn);
    ctaBlock.appendChild(price);

    cardBody.appendChild(name);
    cardBody.appendChild(cardText);
    cardBody.appendChild(ctaBlock);

    container.appendChild(col);
    col.appendChild(card);
    card.appendChild(img);
    card.appendChild(cardBody);
  }
}

// ............Produits..............

export function creationCards(data) {
    
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
    Btn.href = '../../Pages/Panier.html#';

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

}