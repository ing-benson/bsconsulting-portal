FROM php:8.3-apache

# Extension PDO MySQL nécessaire pour l'API de contact
RUN docker-php-ext-install pdo pdo_mysql mysqli

# Active mod_rewrite (utile si des routes propres sont ajoutées plus tard)
RUN a2enmod rewrite

# Le code du site (HTML/CSS/JS + PHP) devient la racine web d'Apache
COPY public/ /var/www/html/

# Permissions saines pour l'utilisateur Apache
RUN chown -R www-data:www-data /var/www/html

EXPOSE 80
