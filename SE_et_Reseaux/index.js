function QuizReseau() {
    let name = prompt("donner votre nom : ");
    if (name == 0) name = "";

    let questions = [
        "1. Quel matériel relie les ordinateurs dans un réseau local ? (Switch/Modem)",
        "2. L'adresse IP sert-elle à identifier une machine ? (Oui/Non)",
        "3. Comment appelle-t-on un réseau qui couvre une ville ? (LAN/MAN)"
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i=i+1) {

        let reponse = prompt(questions[i]);

        if (reponse != 0) {

            reponse = reponse.toUpperCase();

            if (i === 0 && (reponse === "SWITCH" || reponse === "1"))
                score=score+1;

            if (i === 1 && (reponse === "OUI" || reponse === "1"))
                score=score+1;

            if (i === 2 && (reponse === "MAN" || reponse === "2"))
                score=score+1;
        }
    }
    
    let affichage = document.getElementById("reseau-resultat");
    affichage.innerHTML = "Félicitations " + name + " ! Votre score est : <span>" + score + " Sur " + questions.length + "</span>";
    alert("Quiz terminé ! Vous avez obtenu : " + score + "/" + questions.length);
}


function QuizSystème() {

    let name = prompt("donner votre nom : ");
    if (name == 0) name = "";

    let questions = [
        "1. Le SE gère-t-il le matériel (Hardware) ? (Oui/Non)",
        "2. Quel est l'opposé du Software ? (Hard/Soft)",
        "3. Windows est-il un système d'exploitation ? (Oui/Non)"
    ];

    let score = 0;

    for (let i = 0; i < questions.length; i=i+1) {

        let reponse = prompt(questions[i]);

        if (reponse!= 0) {

            reponse = reponse.toUpperCase();

            if (i === 0 && (reponse === "OUI" || reponse === "1"))
                score=score+1;

            if (i === 1 && (reponse === "HARD" || reponse === "1"))
                score=score+1;

            if (i === 2 && (reponse === "OUI" || reponse === "1"))
                score=score+1;
        }
    }

    let affichage = document.getElementById("systeme-resultat");
    affichage.innerHTML ="Félicitations " + name + " ! Votre score est : <span>" + score + " Sur " + questions.length + "</span>";
    alert("Quiz terminé ! Vous avez obtenu : " + score + "/" + questions.length);
}
