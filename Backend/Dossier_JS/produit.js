// ......................Import de Fonctions....................

import { creationCards } from "./Functions.js";

// ...................Recup et split url et ID..................

let url = location.href;
let split_url = url.split("#");
let id_product = split_url[1];

// ...................Creations cartes produits.................


fetch("http://localhost:3000/api/furniture/" + id_product)
  .then((res) => res.json())
  .then((data) => {
    creationCards(data);
  });
