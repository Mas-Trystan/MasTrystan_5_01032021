// ................................................RecupDeAchat..................................................

let obj_recup = localStorage.getItem("Achat");
let recup_json = JSON.parse(obj_recup);
let Prix = localStorage.setItem("Prix", 0);

// ................................................Crea<p>DePrixtotal.............................................

let total_price = document.querySelector("#Total");
let total = document.createElement("p");
total.classList.add("Prix_Total", "text-center", "mt-5");

// ................................................CreaCarteAchat.................................................

for (let i = 0; i < recup_json.length; i++) {
  fetch("http://localhost:3000/api/furniture/" + recup_json[i])
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      let id = data["_id"];
      let name = data["name"];
      let price = data["price"];
      let desc = data["description"];
      let img = data["imageUrl"];
      let perso = data["varnish"];

      let Row = document.getElementById("Row_Card");

      let card = document.createElement("div");
      card.classList.add("Card", "shadow-sm", "mt-5", "text-center");
      card.style.width = "30%";
      card.style.marginLeft = "34%";
      card.style.borderRadius = "25px";
      card.style.backgroundColor = "white";

      let card_img = document.createElement("img");
      card_img.src = img;
      card_img.classList.add("img_Prod");
      card_img.style.width = "100%";
      card_img.style.borderRadius = "25px 25px 0 0";

      let card_name = document.createElement("h3");
      card_name.classList.add("p-2");
      card_name.textContent = name;

      let Price = document.createElement("p");
      Price.textContent = price / 100 + " €";

      let card_desc = document.createElement("p");
      card_desc.classList.add("p-2");
      card_desc.textContent = desc;

      let prix_actuel = parseInt(localStorage.getItem("Prix"));
      localStorage.setItem("Prix", prix_actuel + price);

      Row.appendChild(card);
      card.appendChild(card_img);
      card.appendChild(card_name);
      card.appendChild(card_desc);
      card.appendChild(Price);
      total_price.appendChild(total);

      console.log();

      total.innerText =
        "Total à payer : " + localStorage.getItem("Prix") / 100 + "€";
    });
}

// ................................................VerifForm......................................................

let Form = document.querySelector("#Form");
let Span_Text = document.querySelectorAll(".Span_Text");
let Span_Email = document.querySelector(".Span_Email");
let Span_Adress = document.querySelector(".Span_Adress");
let VerifText = Form.Nom;
let VerifEmail = Form.Email;
let VerifAdress = Form.Adress;

for (let i = 0; i < VerifText.length; i++) {
  let V_t = VerifText[i];
  let S = Span_Text[i];

  V_t.addEventListener("change", function () {
    let Regex_Text = /^[a-zA-Z' ]+$/;
    console.log(Regex_Text.test(this.value));

    if (Regex_Text.test(this.value)) {
      S.innerText = "Nom Valide";
    } else {
      S.innerText = "Nom Invalide";
    }
  });
}

VerifEmail.addEventListener("change", function () {
  let Regex_Email = /^[a-zA-Z]+[@]{1}[a-zA-Z0-9.-_]+[.]{1}[a-z]{2,10}$/;
  console.log(Regex_Email.test(this.value));

  if (Regex_Email.test(this.value)) {
    Span_Email.innerText = "Nom Valide";
  } else {
    Span_Email.innerText = "Nom Invalide";
  }
});

VerifAdress.addEventListener("change", function () {
  let Regex_Adress = /^[a-zA-Z0-9 ]+$/;
  console.log(Regex_Adress.test(this.value));

  if (Regex_Adress.test(this.value)) {
    Span_Adress.innerText = "Nom Valide";
  } else {
    Span_Adress.innerText = "Nom Invalide";
  }
});

// ................................................StorageInput......................................................

const INPUT_NAME = document.querySelector("#Nom");
const INPUT_PRENOM = document.querySelector("#Prenom");
const INPUT_EMAIL = document.querySelector("#Email");
const INPUT_ADRESS = document.querySelector("#Adress");
const INPUT_CITY = document.querySelector("#City");

INPUT_NAME.addEventListener("change", () => {
  const Inp = {
    Nom: INPUT_NAME.value,
    Prenom: INPUT_PRENOM.value,
  };

  localStorage.setItem("Name", JSON.stringify(Inp));
});

// ................................................FetchPost......................................................

Form.addEventListener("submit", (e) => {

  let array_contact = {
    firstName: INPUT_PRENOM.value,
    lastName: INPUT_NAME.value,
    address: INPUT_ADRESS.value,
    city: INPUT_CITY.value,
    email: INPUT_EMAIL.value,
  };

  localStorage.setItem("Array_Contact", JSON.stringify(array_contact));

  let contact = JSON.parse(localStorage.getItem("Array_Contact"));
  let Produits = recup_json;

  console.log(contact);
  console.log(Produits);

  fetch("http://localhost:3000/api/furniture/order", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },

    method: "POST",
    body: JSON.stringify({
      contact: contact,
      products: Produits,
    }),
  })
    .then((response) => response.json())
    .then((json) => {
      localStorage.setItem("ID", json.orderId);
      window.location.href = "Confirmation.html";
    })
    .catch((err) => console.log("Request Failed", err));
});
