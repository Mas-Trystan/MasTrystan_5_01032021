fetch("http://localhost:3000/api/furniture")
.then(res => res.json())
.then(data => {
    console.log(data);
    let l = data.length;
    
    for(let i = 0; i < l; i++){
        console.log(data[i])
        console.log(data[i]['_id']);
        console.log(data[i]['name']);
        console.log(data[i]['description']);
        console.log(data[i]['price']);
        console.log(data[i]['imageUrl']);
        
        let container = document.getElementById("row");

        let Col =  document.createElement('div');
        Col.classList.add("col");

        let Card = document.createElement('div');
        Card.classList.add("card", "shadow-sm", "text-center");
        Card.style.width = "50%";
        Card.style.marginTop = "30px";
        Card.style.marginLeft = "25%";
        Card.style.borderRadius = "25px";

        let Img = document.createElement('img');
        Img.src = data[i]['imageUrl'];
        Img.style.borderRadius = "25px 25px 0 0";


        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        let Name = document.createElement('h3');
        Name.innerText = data[i]['name'];

        let cardText = document.createElement('p');
        cardText.classList.add("card-text");
        cardText.innerText = data[i]['description'];

        let ctaBlock = document.createElement('div');
        ctaBlock.classList.add("d-flex", "justify-content-between", "align-items-center");

        let btnGroup = document.createElement('div');
        btnGroup.classList.add("btn-group");

        let btn = document.createElement('a');
        btn.classList.add("btn", "btn-sm", "btn-outline-secondary","btn_buy");
        btn.innerText = "Voir produit";
        btn.href = 'Pages/Produit.html' + '#' + data[i]['_id'];

        let price = document.createElement('small');
        price.classList.add("text-muted");
        price.innerText = data[i]['price']/100 + ' €';

        ctaBlock.appendChild(btnGroup);
        btnGroup.appendChild(btn);
        ctaBlock.appendChild(price);
        
        cardBody.appendChild(Name);
        cardBody.appendChild(cardText);
        cardBody.appendChild(ctaBlock);
        
        container.appendChild(Col);
        Col.appendChild(Card);
        Card.appendChild(Img);
        Card.appendChild(cardBody)

    }
})
.catch(
    (err) => { alert("Erreur : " + err);
}); 
