var check = document.getElementById('envoie');
check.addEventListener("click", function verif(event)
{
    // Déclarations de mes différents regex
    var alpha = /(^[A-Z]+[a-zA-Zéèêëôœîïûüàáâæç-\s]+$)/;
    var mail = /(^[\w\.-]+@[a-z]+[\.]{1}[a-z]{2,3}$)/;
    var birth =/(^[0-9]{4}[\-]{1}[0-9]{2}[\-]{1}[[0-9]{2}$)/;
    var cp = /(^[0-9]{5}$)/;
    var adr = /(^[0-9]+[a-zA-Z-\s]+$)/;
    // Déclarations de toutes les variables qui seront testées avec mes regex 
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
    {
        document.getElementById("errName").textContent = "Utilisez uniquement des caractères alphabétiques";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errName").textContent = "";
    }
    // Controle du prénom au sein du formulaire
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
    alert(date)
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
    {
        document.getElementById("errSujet").textContent = "Ce champ est obligatoire";
        event.preventDefault();
    }
    else
    {
        document.getElementById("errSujet").textContent = "";
    }
    // Controle de la question au sein du formulaire
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