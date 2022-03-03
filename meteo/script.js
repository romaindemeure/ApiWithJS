let ville = "Paris";

recupererTemperature(ville);
let changerDeVille      = document.querySelector("#changerVille");

changerDeVille.addEventListener('click', () => {
  ville = prompt('Quelle ville souhaitez-vous voir ?');
  recupererTemperature(ville)
})


function recupererTemperature() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=2ba77b6b9814e993d46add4f8c1820e1&units=metric';
  // Créer une requête
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
  requete.responseType = 'json'; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dèss qu'on reçoit une réponse, cette fonction est executée
  requete.onload = function() {
    if (requete.readyState === XMLHttpRequest.DONE) {
      if (requete.status === 200) {

        let reponse     = requete.response; // on stock la réponse
        let temperature = reponse.main.temp;
        let ville       = reponse.name;

        document.querySelector('#temperature_label').textContent = temperature;
        document.querySelector('#ville').textContent = ville;

      } else {
        alert('Un problème est intervenu, merci de revenir plus tard.');
      }
    }
  }
  console.log('temperature actualisé');
}

setInterval(recupererTemperature, 1000);