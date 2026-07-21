-- Exécuté automatiquement au premier démarrage du conteneur MySQL
-- (dossier /docker-entrypoint-initdb.d/)

CREATE TABLE IF NOT EXISTS contact_messages (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(191) NOT NULL,
    email       VARCHAR(191) NOT NULL,
    company     VARCHAR(191) NULL,
    message     TEXT NOT NULL,
    lang        VARCHAR(5) NOT NULL DEFAULT 'fr',
    created_at  TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

    INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
