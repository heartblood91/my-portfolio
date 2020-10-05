# MyPortfolio, mon CV en ligne

> Etendard de mes maigres connaissances dans un seul canal, le https bien sûr! :-D

## Index

- [Description](#description)
- [Screenshots](#enlive)
- [Installation Serveur API](#installationAPI)
- [Installation de l'application android](#installationAndroid)
- [Astuces](#astuces)
- [Package](#package)
- [Confidentialité](#confidentialité)
- [Merci](#merci)

## Description

A la base, cette application a été codé en HTML et CSS lors d'une formation en ligne sur Udemy. (Formation que je recommande fortement au débutant : https://www.udemy.com/course/formation-developpeur-web/)

Je l'ai retranscris en React.js (Front) & Node.js (Back). J'essaye de l'améliorer de jour en jour, au grés de mes formations! J'ai une idée de sa représentation finale, je fais de mon mieux pour y aboutir!

Ce CV possède une rubrique contact. J'ai essayé de la sécurisé au maximum en ajoutant un pot de miel + un token temporaire et random échangé entre l'API et le client de manière transparente. Quand une personne remplie correctement le formulaire, un mail type accusé de récéption lui parvient. De votre côté, vous recevez un mail avec toutes les informations renseignées par l'utilisateur.

PS: Je suis un dévéloppeur passionné avec une soif de connaissance! Je suis à la recherche d'un poste de développeur fullstack afin de me reconvertir dans ce merveilleux milieu!

<section id="enlive">

## La version LIVE

Faîtes un tour sur mon portfolio en ligne pour vous donner une idée du concept: https://cv.hidemyhome.ovh

<br>
 <section id="installationFront">

## Installation du Front End

```shell
$ git clone "https://github.com/heartblood91/my-portfolio" && cd my-portfolio\
$ npm i
```

**Pour que l'application fonctionne correctement suivez les instructions ci-dessous, sinon l'appli ne fera pas de liaison avec la partie backend**

1. Ouvrir le fichier config.js.
2. Renseignez l'url du serveur backend. (par défaut: 'http://localhost:3000')

**ATTENTION**: pour que la partie contact fonctionne, il vous faut un serveur API (faîtes un tour sur mon autre repo, https://github.com/heartblood91/my-portfolio-api )

**Pour gagner du temps, suivez la prochaine procédure, cela vous permettra d'installer le serveur API.**

 <section id="installationAPI">

## Installation du serveur API

```shell
$ git clone "https://github.com/heartblood91/my-portfolio-api" && cd my-portfolio-api\
$ npm i
```

**Pour que l'application fonctionne correctement suivez les instructions ci-dessous, sinon le serveur crashera**

1. Ouvrir le fichier sample.env, et renseignez les informations manquantes.

2. Après, executez la commande suivante pour renommer le fichier:

```shell
$ mv .\sample.env .\.env
```

3. Pour lancer le serveur, exécuter la commande suivante

- En mode développement ou qualification:

```shell
$ npm run server
```

- En mode production:

```shell
$ npm run prod
```

Si vous souhaitez tester la bonne configuration frontend - backend sur la rubrique contact, vous pouvez remplir le formulaire.

## Package

Il s'agit juste d'une liste des packages utilisées et de mes raisons:

- React (La BASE pour une appplication en React) -->[https://fr.reactjs.org/](https://fr.reactjs.org/)
- React Tooltip (Pour faire de beau tooltip sans se prendre la tête...) --> [https://github.com/react-native-community/react-native-maps](https://github.com/react-native-community/react-native-maps)
- Axios (pour la requête post sur le serveur API) --> [https://github.com/axios/axios](https://github.com/axios/axios)

## Astuces

- Le service worker est configuré. Si vous faîtes des MAJ de l'appli, pensez à vider votre cache sur la version de production pour voir les nouveautés.

## Confidentialité

Je pense qu'il est important de faire un point sur l'utilisation des données.

- Aucune informations nécessaire à la rubrique contact n'est conservée sur le serveur ou l'application.
- L'appli ne stock pas de logs (Attention, il peut y avoir des logs mis en place par l'administrateur serveur via Apache2 / Nginx)

## Merci

N'hésitez pas à faire des commentaires ou proposés des évolutions de l'application, je verrais ce que je peux faire!
:heartpulse: Merci :heartpulse:
