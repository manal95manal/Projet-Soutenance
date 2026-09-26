const prpmpt = require("prompt-sync")();
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