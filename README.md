# URL_Shortener
## EST: 

Lihtne URL-lühendaja, mis sisaldab lisaks URL-ide lühendamisele ka lihtsat statistikat linkide kohta. 

### Tehnoloogiad: 

* Kasutajaliides: React.js
* Server: Node.js Express raamistikuga
* Andmebaas: Postgres

### Miks React ja Express?
Kuna tegemist on väiksema projektiga, eesmärgiga harjutada ja õppida veebirakenduste loomist,
tahtsin kasutada nii kasutajaliidese kui ka serveri jaoks sama programmeerimiskeelt. Valisin 
just need raamistikud, kuna tahtsin end React-iga proovile panna, kuid samas kasutada natuke
tuttavamat backend-raamistikku Expressi näol.

### Miks postgres?
Lihtsa lühendaja jaoks oleks piisanud ka võti-väärtus paare kasutavast andmebaasist nagu Redis.
Kuna otsustasin ka lisada kasutajakontod ning personaalne ja globaalne statistika, on selleks 
relatsiooniline andmebaas parem ning lausa vajalik.
## ENG: 

Simple URL-shortener, that also tracks some statistics about link use.

### Stack:

* Frontend: React.js
* Backend: Node.js with the Express framework
* Database: Postgres

### Why React and Express?
Because this project's main goal is to learn web-app development, I wanted to use the same
programming language for both the frontend and backend. I chose these frameworks, because
I want to challenge myself with React, but still have a familiar backend framework in Express.

### Why postgres?
For a simple shortener, Redis, which uses key-value pairs would have been enough. Postgres
was needed, because I decided to implement user accounts as well as personal and global stats,
which a simple key-value database can not implement as well and as reliably as postgres.
