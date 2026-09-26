const prompt = require("prompt-sync")();
let candidats = [
    {
        cin: "AB123456",
        nom: "Boushaba",
        prenom: "Soufiane",
        partiPolitique: "Independant",
        age: 40,
        electeurs: []
    },
    {
        cin: "CD234567",
        nom: "Alaoui",
        prenom: "Yassine",
        partiPolitique: "Istiqlal",
        age: 35,
        electeurs: ["AB123456","OP890123"]
    },
    {
        cin: "EF345678",
        nom: "Bennani",
        prenom: "Sara",
        partiPolitique: "Authenticite et Modernite",
        age: 42,
        electeurs: []
    },
    {
        cin: "GH456789",
        nom: "Amrani",
        prenom: "Omar",
        partiPolitique: "L'Unite et de la Democratie",
        age: 38,
        electeurs: ["CA905432","ZE467230","MA864309"]
    },
    {
        cin: "IJ567890",
        nom: "Idrissi",
        prenom: "Salma",
        partiPolitique: "Authenticite et Modernite",
        age: 31,
        electeurs: ["JA467831"]
    },
    {
        cin: "KL678901",
        nom: "Fassi",
        prenom: "Adam",
        partiPolitique: "Istiqlal",
        age: 45,
        electeurs: ["AZ945638"]
    },
    {
        cin: "MN789012",
        nom: "Tazi",
        prenom: "Lina",
        partiPolitique: "Progres et du Socialisme",
        age: 36,
        electeurs: ["KL897654"]
    },
    {
        cin: "OP890123",
        nom: "Chraibi",
        prenom: "Mehdi",
        partiPolitique: "Independant",
        age: 39,
        electeurs: []
    },
    {
        cin: "KL897654",
        nom: "Loutfi",
        prenom: "Mouad",
        partiPolitique: "Independant",
        age: 28,
        electeurs: []
    },
    {
        cin: "AZ945638",
        nom: "Taki",
        prenom: "Raghad",
        partiPolitique: "Independant",
        age: 22,
        electeurs: []
    },
    {
        cin: "JA467831",
        nom: "Faouzi",
        prenom: "Salima",
        partiPolitique: "Independant",
        age: 25,
        electeurs: []
    },
    {
        cin: "CA905432",
        nom: "Nouri",
        prenom: "Jad",
        partiPolitique: "Independant",
        age: 31,
        electeurs: []
    },
    {
        cin: "ZE467230",
        nom: "Leamiri",
        prenom: "Anwar",
        partiPolitique: "Independant",
        age: 34,
        electeurs: []
    },
    {
        cin: "MA864309",
        nom: "Elhachimi",
        prenom: "Fouzia",
        partiPolitique: "Independant",
        age: 48,
        electeurs: []
    }
];
function ajouterCandidat() {
    console.log("Ajouter un candidat");
    let cin = prompt("CIN : ");
    let nom = prompt("Nom : ");
    let prenom = prompt("Prenom : ");
    let parti = prompt("Partipolitique : ");
    let age = Number(prompt("Age : "));
    let existe = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            existe = true;
        }
    }
    if (existe === true) {
        console.log("Ce candidat existe deja.");
    } else {
        candidats [candidats.length] = {
            cin: cin,
            nom: nom,
            prenom: prenom,
            partiPolitique: parti,
            age: age,
            electeurs: []
        };
        console.log("Candidat ajoute avec succes.");
    }
}
ajouterCandidat()
function ajouterPlusieursCandidats() {
    console.log("Ajouter plusieurs candidats");
    let nombre = Number(prompt("Combien de candidats voulez-vous ajouter ?"));

    for (let i = 0; i < nombre; i++) {
        console.log("Candidat" + (i + 1));
        let cin = prompt("CIN : ");
        let nom = prompt("Nom : ");
        let prenom = prompt("Prenom : ");
        let parti = prompt("Parti politique : ");
        let age = Number(prompt("Age : "));
        let existe = false;
        for (let j = 0; j < candidats.length; j++) {
            if (candidats[j].cin === cin) {
                existe = true;
            }
        }
        if (existe === true) {
            console.log("Ce candidat existe deja.");
        } else {
            candidats[candidats.length] = {
                           cin: cin,
                           nom: nom,
                           prenom: prenom,
                           partiPolitique: parti,
                           age: age,
                           electeurs: []
                        };
            console.log("Candidat ajoute.");
                    }
                }
            }
            ajouterPlusieursCandidats()
function afficherCandidats() {
    console.log("Liste des candidats");
    if (candidats.length === 0) {
        console.log("Aucun candidat.");
    } else {
        for (let i = 0; i < candidats.length; i++) {
            console.log("Candidat " + (i + 1));
            console.log("CIN : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);
            console.log("Prenom: " + candidats[i].prenom);
            console.log("Parti: " + candidats[i].partiPolitique);
            console.log("Age: " + candidats[i].age);
            console.log("Nombre de votes: " + candidats[i].electeurs.length);
            console.log(" ");
        }
    }
}
afficherCandidats()
function trierParVotes() {
    console.log("Classement des Candidats");
    for (let i = 0; i < candidats.length - 1; i++) {
        for (let j = i + 1; j < candidats.length; j++) {
            if (candidats[i].electeurs.length < candidats[j].electeurs.length) {
                let temporaire = candidats[i];
                candidats[i] = candidats[j];
                candidats[j] = temporaire;
            }
        }
    }
    for (let i = 0; i < candidats.length; i++) {
        console.log((i + 1) + " " + candidats[i].prenom + " " + candidats[i].nom + " " + candidats[i].electeurs.length + " vote(s)");
    }
}
trierParVotes()
function filtrerParParti() {
    console.log("Recherche par parti : ");
    let partiRecherche = prompt("Parti politique : ");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].partiPolitique.toLowerCase() === partiRecherche.toLowerCase()) {
            console.log(candidats[i].prenom + " " + candidats[i].nom);

                            trouve = true;
        }
    }
    if (trouve === false) {
        console.log("Aucun candidat trouve pour ce parti.");
    }
}
filtrerParParti()
function voter() {
    console.log("Voter");
    let cinElecteur = prompt("Votre CIN: ");
    let dejaVote = false;
    for (let i = 0; i < candidats.length; i++) {
        for (let j = 0; j < candidats[i].electeurs.length; j++) {
            if (candidats[i].electeurs[j] === cinElecteur) {
                dejaVote = true;
            }
        }
    }
    if (dejaVote === true) {
        console.log("Vous avez deja vote.");
    } else {
        let cinCandidat = prompt("CIN du candidat : ");
        let trouve = false;
        let position = -1;
        for (let i = 0; i < candidats.length; i++) {
            if (candidats[i].cin === cinCandidat) {
                trouve = true;
                position = i;
            }
        }
        if (trouve === false) {
            console.log("Candidat introuvable.");
        } else {
            let nombreElecteurs = candidats[position].electeurs.length;
            candidats[position].electeurs.length;
            candidats[position].electeurs[nombreElecteurs] = cinElecteur;
            console.log("Votre vote a ete enregistre.");
        }
    }
}
voter()
function modifierCandidat() {
    console.log("Modifier un candidat");
    let cin = prompt("CIN du candidat : ");
    let trouve = false;
    let position = -1;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {

            trouve = true;
            position = i;
        }
    }
    if (trouve === false) {
        console.log("Candidat introuvable.")
    } else {
        console.log("1.Modifier le parti");
        console.log("2.Modifier l'age");
        let choix = prompt("Votre choix : ");
        if (choix === "1") {
            let nouveauParti = prompt("Nouveau parti : ");
            candidats[position].partiPolitique = nouveauParti;
                     console.log("Parti modifie.");
        } else if (choix === "2") {
              let nouvelAge = Number(prompt("Nouvel age : "));
         candidats[position].age = nouvelAge;
            console.log("Age modifie.");
    } else {
        console.log("choix incorrect.");
    }
  }
}
modifierCandidat()
function supprimerCandidat() {
    console.log("Supprimer un candidat");
    let cin = prompt("CIN du candidat : ");
    let position = -1;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].cin === cin) {
            position = i;
        }
    }
    if (position === -1) {
        console.log("Candidat introuvable.");
    } else {
        for (let i = position; i < candidats.length - 1; i++) {
            candidats[i] = candidats[i + 1];
        }
            
        candidats.length = candidats.length - 1;
        console.log("Candidat supprime.");
    }
}
supprimerCandidat()
function rechercherCandidat() {
    console.log("Rechercher un candidat");
    let nomRecherche = prompt("Nom du candidat : ");
    let trouve = false;
    for (let i = 0; i < candidats.length; i++) {
        if (candidats[i].nom.toLowerCase() === nomRecherche.toLowerCase()) {
            console.log("Candidat trouve.");
            console.log("CIN : " + candidats[i].cin);
            console.log("Nom : " + candidats[i].nom);

            console.log("Prenom : " + candidats[i].prenom);
            console.log("Parti : " + candidats[i].partiPolitique);
                        console.log("Age : " + candidats[i].age);
                        trouve = true;
        }
    }
if (trouve === false) {
    console.log("Aucun candidat trouve.");
    }
}
rechercherCandidat()