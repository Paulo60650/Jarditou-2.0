var check = document.getElementById('envoie');
// Ajout d'un évènement au moment où l'on click sur le bouton envoyer situé au sein de
// la balise "envoie" dans la page HTML.Son id est récupéré grace à la fonction getElementById
check.addEventListener("click", function verif(event)
{
    // Déclarations de mes différents regex
    var alpha = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    // regex demandant une première lettre en majuscule plus tout les caractères spéciaux ensuite
    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    // regex controlant les adresses mails , on autorise tout les carctères alphanumériques
    // ainsi que ". et -" on dis qu'il faut @ ensuite plus au moins 1 caractère alphabétique
    // puis un point suivi de 2 ou 3 caractères alphabétiques
    var birth =/(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    // Ce regex est pour les dates américaines car c'est la valeur renvoyer par la balise
    // de l'input type date .On demande ainsi les 4 chiffres de l'année suivi d'un "-",puis
    // on controle les 2 chiffres correspondant au mois suivi d'un "-" et enfin les 2 chiffres
    // correspondant au jour
    var cp = /(^[0-9]{5}$)/;
    // regex controlant le code postal, on controle s'il y a bien 5 chiffres et uniquemnt des chiffres
    var adr = /(^[0-9]+[a-zA-Z-\s]+$)/;
    // regex controlant l'adresse , il doit y avoir au moins 1 chiffre suivi de au moins
    // 1 caractère alphabétique

    // Déclarations de toutes les variables qui seront testées avec mes regex 
    // Les valeurs sont récupérées grace à la fonction getElementById  qui va chercher la valeur 
    // de retour des id correspondant dans la page HTML 
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var date = document.getElementById("date").value;
    var codepost = document.getElementById("codepost").value;
    var adresse = document.getElementById("adresse").value;
    var ville= document.getElementById("ville").value;
    var email = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var question = document.getElementById("question").value;
    // Controle du nom au sein de mon formulaire 
    if (!alpha.test(nom))
    // Le regex alpha passe la valeur de la variable stocké dans "nom" pour vérifier si elle 
    // respecte bien les critères paramettrés
    {
        document.getElementById("errName").textContent = "Utilisez uniquement des caractères alphabétiques";
        // Appel de l'id "errName" et affichage du message "Utilisez uniquement des caractères alphabétiques"
        // dans une balise <p> vide situé dans ma page HTML grace à la fonction textContent
        event.preventDefault();
        // Retour à l'évènement déterminé dans la var check en début de page
    }
    else
    {
        document.getElementById("errName").textContent = "";
        // Si le champs est finalement validé le message d'erreur affiché au sein de la balise
        // correspondante est maintenat vide et donc comme effacé
    }
    // Controle du prénom au sein du formulaire 
    // Meme procédé que précédemment
    if(!alpha.test(prenom))
    {
        document.getElementById("errPrenom").textContent = "Utilisez uniquement des caractères alphabétiques";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errPrenom").textContent = "";
    }
    // Controle de la date de naissance au sein du formulaire
    // Meme procédé que précédemment
    if(!birth.test(date))
    {
        document.getElementById("errDate").textContent = "Date de naissance non conforme";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errDate").textContent = "";
    }
    // Controle du code postal au sein du formulaire
    // Meme procédé que précédemment 
    if(!cp.test(codepost))
    {
        document.getElementById("errCP").textContent = "Code postal non conforme";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errCP").textContent = "";
    }
    // Controle de l'adresse au sein du formulaire
    // Meme procédé que précédemment
    if(!adr.test(adresse))
    {
        document.getElementById("errAdr").textContent = "Adresse non conforme";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errAdr").textContent = "";
    }
    // Controle de la ville au sein du formulaire
    // Meme procédé que précédemment
    if (!alpha.test(ville))
    {
        document.getElementById("errVille").textContent = "Utilisez uniquement des caractères alphabétiques";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errVille").textContent = "";
    }
    // Controle de l'email au sein du formulaire
    // Meme procédé que précédemment
    if(!mail.test(email))
    {
        document.getElementById("errMail").textContent = "Adresse mail non conforme";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errMail").textContent = "";
    }
    // Controle du sujet au sein du formulaire
    if(sujet == 1)
    // Si la valeur renvoyé par la balise <select> ayant l'id sujet est égal 1 on exécute
    // les ordres si dessous avec le meme procédé que vu précédemment
    {
        document.getElementById("errSujet").textContent = "Ce champ est obligatoire";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errSujet").textContent = "";
    }
    // Controle de la question au sein du formulaire
    // Si rien n'est écrit dans la balise textarea qui a l'id "question" on exécute
    // les ordres si dessous avec le meme procédé que vu précédemment
    if(question == "")
    {
        document.getElementById("errQuest").textContent = "Ce champ est obligatoire";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errQuest").textContent = "";
    }
});