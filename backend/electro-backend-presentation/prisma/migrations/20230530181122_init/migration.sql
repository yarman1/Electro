-- CreateTable
CREATE TABLE `users` (
    `userid` VARCHAR(40) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `visual_name` VARCHAR(255) NOT NULL,
    `password_hash` VARCHAR(64) NOT NULL,
    `phone_number` VARCHAR(25) NULL,
    `address` VARCHAR(255) NULL,
    `profile_picture_link` VARCHAR(255) NULL DEFAULT 'https://i.imgur.com/Eyzrkg3.jpeg',

    UNIQUE INDEX `users_userid_key`(`userid`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`userid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `advertisements` (
    `advertisementid` VARCHAR(40) NOT NULL,
    `seller_id` VARCHAR(40) NOT NULL,
    `category_id` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` LONGTEXT NULL,
    `price` DOUBLE NULL,
    `creation_date` DATETIME NOT NULL,

    UNIQUE INDEX `advertisements_advertisementid_key`(`advertisementid`),
    PRIMARY KEY (`advertisementid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `ordersid` VARCHAR(40) NOT NULL,
    `advertisement_id` VARCHAR(40) NOT NULL,
    `buyer_id` VARCHAR(40) NOT NULL,
    `order_date` DATETIME NOT NULL,
    `verification` TINYINT NOT NULL,

    UNIQUE INDEX `orders_ordersid_key`(`ordersid`),
    PRIMARY KEY (`ordersid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `categoriesid` INTEGER NOT NULL,
    `parent_category_id` INTEGER NULL,
    `category_name` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `categories_categoriesid_key`(`categoriesid`),
    PRIMARY KEY (`categoriesid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `specifications` (
    `specificationid` INTEGER NOT NULL,
    `category_id` INTEGER NOT NULL,
    `specification_name` VARCHAR(255) NOT NULL,
    `group` VARCHAR(50) NULL,

    UNIQUE INDEX `specifications_specificationid_key`(`specificationid`),
    PRIMARY KEY (`specificationid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `advertisement_specs` (
    `advertisement_specsid` VARCHAR(40) NOT NULL,
    `advertisement_id` VARCHAR(40) NOT NULL,
    `specification_id` INTEGER NOT NULL,

    UNIQUE INDEX `advertisement_specs_advertisement_specsid_key`(`advertisement_specsid`),
    PRIMARY KEY (`advertisement_specsid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `advertisements` ADD CONSTRAINT `advertisements_seller_id_fkey` FOREIGN KEY (`seller_id`) REFERENCES `users`(`userid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `advertisements` ADD CONSTRAINT `advertisements_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`categoriesid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_advertisement_id_fkey` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisements`(`advertisementid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_buyer_id_fkey` FOREIGN KEY (`buyer_id`) REFERENCES `users`(`userid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `categories` ADD CONSTRAINT `categories_parent_category_id_fkey` FOREIGN KEY (`parent_category_id`) REFERENCES `categories`(`categoriesid`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `specifications` ADD CONSTRAINT `specifications_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`categoriesid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `advertisement_specs` ADD CONSTRAINT `advertisement_specs_advertisement_id_fkey` FOREIGN KEY (`advertisement_id`) REFERENCES `advertisements`(`advertisementid`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `advertisement_specs` ADD CONSTRAINT `advertisement_specs_specification_id_fkey` FOREIGN KEY (`specification_id`) REFERENCES `specifications`(`specificationid`) ON DELETE RESTRICT ON UPDATE CASCADE;
