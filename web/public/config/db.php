<?php
declare(strict_types=1);

/**
 * Connexion PDO à MySQL, configurée via les variables d'environnement
 * injectées par docker-compose (voir service "web" dans docker-compose.yml).
 */
function get_db_connection(): PDO
{
    $host = getenv('DB_HOST') ?: 'db';
    $name = getenv('DB_NAME') ?: 'bsconsulting';
    $user = getenv('DB_USER') ?: 'bsconsulting_user';
    $pass = getenv('DB_PASS') ?: '';

    $dsn = "mysql:host={$host};dbname={$name};charset=utf8mb4";

    return new PDO($dsn, $user, $pass, [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
    ]);
}
