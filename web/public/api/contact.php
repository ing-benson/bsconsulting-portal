<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require __DIR__ . '/../config/db.php';

function respond(int $status, array $payload): never
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(405, ['success' => false, 'error' => 'method_not_allowed']);
}

$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);

// Compatibilité : accepte aussi un envoi classique en x-www-form-urlencoded
if (!is_array($data)) {
    $data = $_POST;
}

$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$company = trim((string)($data['company'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$lang    = in_array($data['lang'] ?? 'fr', ['fr', 'en'], true) ? $data['lang'] : 'fr';

$errors = [];
if ($name === '' || mb_strlen($name) > 191) {
    $errors[] = 'name';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($email) > 191) {
    $errors[] = 'email';
}
if ($message === '') {
    $errors[] = 'message';
}
if (mb_strlen($company) > 191) {
    $errors[] = 'company';
}

if (!empty($errors)) {
    respond(422, ['success' => false, 'error' => 'validation_failed', 'fields' => $errors]);
}

try {
    $pdo = get_db_connection();
    $stmt = $pdo->prepare(
        'INSERT INTO contact_messages (name, email, company, message, lang)
         VALUES (:name, :email, :company, :message, :lang)'
    );
    $stmt->execute([
        ':name'    => $name,
        ':email'   => $email,
        ':company' => $company !== '' ? $company : null,
        ':message' => $message,
        ':lang'    => $lang,
    ]);
} catch (Throwable $e) {
    // Ne jamais exposer le détail de l'erreur SQL au client
    error_log('[contact.php] ' . $e->getMessage());
    respond(500, ['success' => false, 'error' => 'server_error']);
}

respond(200, ['success' => true]);
