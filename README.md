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

  * [Website](#website)
  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Installatie](#installatie)
  * [Licentie](#licentie)

## Website

https://armanvd.github.io/the-client-website/

## Beschrijving

Het project heeft nu een infinite canvas, deze is opgezet met css en het infinite scrolling is gemaakt met JavaScript.
Het canvas is responsive.

![image](https://github.com/user-attachments/assets/9da374d5-a48e-45d1-bed5-c92e4c62a635)
![IMG_5614](https://github.com/user-attachments/assets/9d73dbc7-c963-49c7-8dc5-2a1668961b75)


https://armanvd.github.io/the-client-website/

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
Het infinite canvas is gemaakt met de hmtl tag 'canvas', hier heb ik de class name "InfiniteCanvas" aan gegeven. Het canvas zit in een 'div' met de class name "Infinite-Canvas". Deze is verder gestyled met css. Het meeste werk zit in JavaScript.

Hier is te zien hoe JavaScript zelf berekend hoe veel nieuwe images geladen moeten worden. https://github.com/ArmanVD/the-client-website/blob/f5033c0aaa308ad6dc37571e949b2b72a5384bbc/scripts/script.js#L14C1-L31C6

De functie die controleert waar op de pagina wij zijn en of er op dit punt nieuwe images geladen moeten worden. https://github.com/ArmanVD/the-client-website/blob/f5033c0aaa308ad6dc37571e949b2b72a5384bbc/scripts/script.js#L59C1-L80C2



## Installatie

De pagina is locaal te installeren en te bewerken door de repository te clonen / te forken



## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
