//.................. Import de fonctions........................

import {displayData} from './Functions.js';

//.................. Création de cartes........................

fetch("http://localhost:3000/api/furniture")
.then((res) => res.json())
.then((json) => {
  displayData(json);
})
.catch((err) => {
  alert("Erreur : " + err);
});