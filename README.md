# The Client - Website

De opdracht is om een homepagina te maken om de collectie van vijf musea tentoon te
stellen. Deze homepagina heeft een "oneindig canvas" waar de gebruiker oneindig in alle
richtingen kan scrollen. Het canvas is gevuld met willekeurig uitgekozen kunstobjecten uit
een API. Elk object is aanklikbaar.
Op het canvas moet in- en uitgezoomd kunnen worden.
De pagina zou filters moeten hebben, die objecten dimmen die niet binnen de filters passen.
Deze filters zijn aanklikbaar en leiden naar de zoekpagina.
De opdrachtgever heeft een duidelijk design geleverd, waar aan voldaan moet worden.


## Inhoudsopgave Readme

  * [Live Link](#Live Link)
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Live Link

https://armanvd.github.io/the-client-website/

## Beschrijving

Het project heeft nu een infinite canvas, deze is voornamelijk gecodeerd met javascript. Je kan door het infinite canvas heen door te draggen met de muis. 
Het canvas is responsive en de form ook.

![image](https://github.com/user-attachments/assets/10c8d413-c1b8-43ab-b9f9-e5acccabdda3)
![IMG_5607](https://github.com/user-attachments/assets/80ed84d6-e510-4394-83c6-dd0aecf5347a)

https://armanvd.github.io/the-client-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Het infinite canvas is gemaakt met de hmtl tag 'canvas', hier heb ik de class name "InfiniteCanvas" aan gegeven. Het canvas zit in een 'div' met de class name "Infinite-Canvas". Deze is verder gestyled met css. Het meeste werk zit in JavaScript.
Hier worden de images ingeladen en gepositioneerd. https://github.com/ArmanVD/the-client-website/blob/36ca4ac6ec92463f252ed80f940e1bf31b89ab19/scripts/script.js#L16C1-L32C3

Hier is ook de functie voor het draggen ingevoegd. https://github.com/ArmanVD/the-client-website/blob/36ca4ac6ec92463f252ed80f940e1bf31b89ab19/scripts/script.js#L46C1-L70C1

, evenals het oneindig maken van het canvas. https://github.com/ArmanVD/the-client-website/blob/36ca4ac6ec92463f252ed80f940e1bf31b89ab19/scripts/script.js#L72C1-L92C4





## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
