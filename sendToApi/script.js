const url = 'https://lesoublisdelinfo.com/api.php';

let requete = new XMLHttpRequest();

// requete.open('GET', url);
// requete.responseType = 'json';
// requete.send();

// Post
requete.open('POST', url);
requete.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
requete.responseType = "json";
requete.send('prenom=romain')

requete.onload = function(){
    if(requete.readyState === XMLHttpRequest.DONE)
        if(requete.status === 200){
            let reponse = requete.response;
            console.log(reponse);
    } else {
        alert("un problème est intervenu, merci de revenir plus tard.")
    }
}