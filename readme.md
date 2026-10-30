# Mon projet : Génération de QR Code

## Présentation

Ce projet consiste à créer un formulaire permettant de récupérer l'URL (Uniform Resource Locator) d'une page web afin de générer un QR Code redirigeant vers cette page.

Ce projet est entièrement réalisé en JavaScript. Pour sa réalisation, j'ai utilisé plusieurs outils et fonctionnalités.

## Outils utilisés

Les outils utilisés sont principalement des fonctionnalités de JavaScript et d'Express.

#### 1. Middleware

Un middleware agit comme un intermédiaire entre le moment où le client clique sur le bouton et celui où la route `app.post()` reçoit les données.

Il fonctionne comme suit :

1. Il intercepte la requête POST.
2. Il lit les données brutes envoyées dans le corps de la requête.
3. Il les transforme en un objet JavaScript exploitable.

#### 2. GET et POST

En développement web, pour communiquer entre le client (le navigateur) et le serveur (Express), on utilise des méthodes HTTP. Les deux plus courantes sont GET et POST.

* **GET** : C'est comme une carte postale. Les données peuvent être visibles directement dans l'URL. Cette méthode est principalement utilisée pour récupérer une page ou des informations.

* **POST** : C'est comme une lettre fermée dans une enveloppe. Les données (ici, l'URL saisie par le client) sont envoyées dans le corps de la requête (`req.body`) plutôt que directement dans l'URL.

#### 3. Async et Await

Par défaut, JavaScript exécute les instructions de manière séquentielle. Cependant, certaines opérations peuvent prendre du temps, notamment les requêtes vers un serveur ou une API.

* **Async** : Permet de déclarer une fonction asynchrone. Cette fonction retourne automatiquement une promesse (Promise).

* **Await** : Permet d'attendre la résolution d'une promesse avant de poursuivre l'exécution de la fonction asynchrone.

#### 4. Try et Catch

En JavaScript, la structure `try...catch` sert à gérer les erreurs (exceptions) de manière contrôlée afin d'éviter les interruptions inattendues du programme.

* **Try** : Contient les instructions à exécuter. Si une erreur se produit dans ce bloc, l'exécution passe directement au bloc `catch`.

* **Catch** : Récupère l'objet contenant les informations sur l'erreur afin de pouvoir la traiter ou afficher un message approprié.

## Conclusion

Ce projet m'a permis de mieux comprendre l'utilité des fonctions et des fonctionnalités de JavaScript, d'en découvrir de nouvelles et de mettre en pratique mes connaissances en développement web.
