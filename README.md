# BSConsulting — Site dockerisé

Stack : **Nginx** (reverse proxy) → **Apache + PHP 8.3** (site + API) → **MySQL 8** (stockage du formulaire de contact), avec **phpMyAdmin** pour consulter la base.

## Structure du projet

```
bsconsulting-docker/
├── docker-compose.yml
├── .env.example          → à copier en ".env"
├── nginx/
│   └── default.conf      → reverse proxy vers le conteneur "web"
├── web/
│   ├── Dockerfile         → image Apache + PHP
│   └── public/            → racine du site (servie par Apache)
│       ├── index.html
│       ├── css/style.css
│       ├── js/script.js
│       ├── config/db.php  → connexion PDO à MySQL
│       └── api/contact.php→ endpoint appelé par le formulaire de contact
└── db/
    └── init.sql           → crée la table contact_messages au 1er démarrage
```

## Démarrage

1. Copier le fichier d'environnement et ajuster les mots de passe :
   ```bash
   cp .env.example .env
   ```

2. Construire et lancer les conteneurs :
   ```bash
   docker compose up --build -d
   ```

3. Accès :
   - Site : http://localhost (port défini par `NGINX_PORT`, 80 par défaut)
   - phpMyAdmin : http://localhost:8081 (port défini par `PHPMYADMIN_PORT`)
     - Serveur : `db` (déjà pré-rempli)
     - Utilisateur / mot de passe : ceux définis dans `.env`

4. Arrêter la stack :
   ```bash
   docker compose down
   ```
   Ajouter `-v` pour supprimer aussi les données MySQL (`docker compose down -v`).

## Comment ça circule

1. Le navigateur appelle **Nginx** sur le port 80 (seul port exposé publiquement).
2. Nginx fait un `proxy_pass` vers le conteneur **web** (Apache + PHP), qui n'est joignable que depuis le réseau Docker interne.
3. Apache sert directement `index.html`, `css/`, `js/` comme des fichiers statiques.
4. Le formulaire de contact envoie un `fetch()` en JSON vers `/api/contact.php`.
5. `contact.php` valide les champs puis insère la ligne dans la table `contact_messages` de MySQL via PDO (requêtes préparées).
6. Les messages sont consultables dans phpMyAdmin, table `contact_messages` de la base `bsconsulting`.

## Points à adapter avant mise en production

- Remplacer les mots de passe du fichier `.env` par des valeurs fortes et uniques.
- Remplacer le numéro `50900000000` dans `index.html` et `js/script.js` (bouton WhatsApp + section Contact) par le vrai numéro.
- Ajouter un certificat TLS (ex. via Certbot + un bloc `server` HTTPS supplémentaire dans `nginx/default.conf`, ou un reverse proxy externe type Traefik) avant d'exposer le site publiquement.
- Ne pas exposer le port de phpMyAdmin publiquement en production, ou le protéger (VPN, IP allowlist, auth basique Nginx).
- Le fichier `.env` ne doit jamais être commité (déjà exclu via `.gitignore`).
