# VoicebotBankProject

Ce projet est la réalisation d'un prototype d'interface voix pour la [BNP Parisbas Personal Fnance](https://personal-finance.bnpparibas/fr/) réalisé dans le cadre du master [Innovation et Transformation Numérique](https://www.sciencespo.fr/ecole-management-innovation/fr/formations/innovation-transformation-numerique.html) à SciencesPo Paris et Télécom ParisTech.
Nous sommes une équipe de 4 étudiants et avons fait ce projet en plus de nos cours.
Nous avons également été accompagné par [Metrics Factory](http://www.themetricsfactory.com/).
Le projet s'est déroulé de septembre 2018 à mai 2019.

## Démo

>La démonstration fonctionne uniquement sur ordinateur et sur le navigateur Google Chrome.

Le résultat du projet est disponible [ici](https://stormy-hollows-17040.herokuapp.com/).

La démonstration consiste à utiliser un assistant vocal qui guide l'utilisateur lors d'une simulation à partir du site [Cetelem](https://www.cetelem.fr/fr/accueil).
La page de démonstration correspond au résultat d'une simulation de crédit d'une valeur de 15 000€  pour des vacances.
Le contexte complet de la démonstration est détaillé [ici](https://docs.google.com/document/d/1t0GNiCycPUOkMlgAducT4uIE_KiCTIrA_gjZTrOMc7s/edit?usp=sharing).

## Lancer le projet localement

>Pour lancer l'application localement il est nécessaire d'avoir installé [node.js](https://nodejs.org/fr/).

À la racine du projet lancer :
`npm start`
Puis ouvrir un onglet sur Google Chrome à l'adresse [localhost:8080](http://localhost:8080).
>Sur Linux il suffit de lancer le fichier [run.sh](run.sh).

## Déroulement du projet

### Définition de l'usage et cadrage technique

> De septembre 2018 à janvier 2019

Lors du premier semestre nous avons :
- Réalisé un benchmark technique des assistants vocaux afin de comprendre les usages
- Réalisé un benchmark de la fintech afin d'identifier les innovations du secteur
- Étudié le parcours client afin de cibler les pain points
- Étudié les différents moteurs d'agent conversationnels vocaux ([Dialogflow](https://dialogflow.com/), [Amazon Lex](https://aws.amazon.com/fr/lex/), [Watson Assistant](https://www.ibm.com/cloud/watson-assistant/), ...)
- Défini des scénarii de conversations

### Prototypage

> De janvier à mai 2019

Lors du second semestre nous avons :
- Mis en place l'agent conversationnel vocal sur [Dialogflow](https://dialogflow.com/)
- Intégré l'agent sur une page web reprenant l'apparence du site de [Cetelem](https://www.cetelem.fr/fr/credit/resultat-simulation)
- Réalisé des tests avec des utilisateurs externe au projet
- Déployé le projet sur [Heroku](https://dashboard.heroku.com)
