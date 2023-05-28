-- CreateTable
CREATE TABLE `users` (
    `userid` VARCHAR(191) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password_hash` VARCHAR(64) NOT NULL,

    UNIQUE INDEX `users_userid_key`(`userid`),
    UNIQUE INDEX `users_email_key`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
