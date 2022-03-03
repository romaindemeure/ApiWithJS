const url = 'https://blockchain.info/ticker';

function recupererPrix(){
  // Créer une requette 
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST | Deuxieme paramètre : url
  requete.responseType = 'json'; // Nous attendons du json
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on reçoit une réponse, cette fonction est executée 

  requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE){
      if(requete.status === 200){ // code 200 veut dire qu'il n'y a pas eu d'erreur
        let reponse = requete.response; // on stock la reponse
        let prixEnEuros = reponse.EUR.last; // on stock le prix en euro
        document.querySelector('#price_label').textContent = prixEnEuros; // on remplace le texte avec le prix de l'API
      } else {
        alert("un problème est survenue, merci de revenir plutard")
      }
    }
  }
  console.log("Prix actualisé")
}
setInterval(recupererPrix, 1000);