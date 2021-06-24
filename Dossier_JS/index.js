fetch("http://localhost:3000/api/furniture")
.then(res => res.json())
.then(data => {
    
    for(let i = 0; i < data.length; i++){
        
        let container = document.getElementById("row");

        let col =  document.createElement('div');
        col.classList.add("Col");

        let card = document.createElement('div');
        card.classList.add("Card", "shadow-sm", "text-center");

        let img = document.createElement('img');
        img.src = data[i]['imageUrl'];
        img.classList.add('Img')

        let cardBody = document.createElement('div');
        cardBody.classList.add("card-body");

        let name = document.createElement('h3');
        name.innerText = data[i]['name'];

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
        
        cardBody.appendChild(name);
        cardBody.appendChild(cardText);
        cardBody.appendChild(ctaBlock);
        
        container.appendChild(col);
        col.appendChild(card);
        card.appendChild(img);
        card.appendChild(cardBody)

    }
})
.catch(
    (err) => { alert("Erreur : " + err);
}); 
