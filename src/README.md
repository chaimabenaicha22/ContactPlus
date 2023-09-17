# ContactPlus

Bienvenue dans l'application de gestion de contacts. Cette application est construite avec un front-end en JavaScript pur (HTML, CSS, JS) et un back-end en JavaScript (Node.js) utilisant une base de données MySQL.

## Prérequis

Avant de pouvoir exécuter cette application, assurez-vous d'avoir les éléments suivants installés et configurés sur votre ordinateur :

1. **Node.js** : Si ce n'est pas déjà fait, vous pouvez télécharger et installer Node.js.

2. **MySQL** : Assurez-vous d'avoir un serveur MySQL installé et en cours d'exécution sur votre machine. Vous pouvez utiliser un outil comme XAMPP.

## Configuration de la base de données

1. Importez la base de données : Utilisez l'outil de gestion de base de données de votre choix (par exemple, phpMyAdmin) pour importer le fichier SQL fourni (contact_manager.sql) situé dans le dossier "src/config/contact_manager.sql" de ce projet.

2. Configurez les variables d'environnement : Créez un fichier `.env` en utilisant .envExample à la racine du projet.

## Installation des dépendances

1. Ouvrez un terminal et naviguez jusqu'au le répertoire src de ce projet: cd src

2. Exécutez la commande suivante pour installer les dépendances du projet :

npm install

## Lancement de l'application

1. Une fois les dépendances installées, lancez le serveur Node.js en exécutant la commande suivante :

npm start

Le serveur sera exécuté sur le port 3000.

2. Ouvrez le fichier index.html pour ouvrir l'application.
