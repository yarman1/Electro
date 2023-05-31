/*
  Warnings:

  - You are about to drop the column `address` on the `users` table. All the data in the column will be lost.
  - Added the required column `value` to the `advertisement_specs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `advertisement_specs` ADD COLUMN `value` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `advertisements` ADD COLUMN `address` VARCHAR(255) NULL,
    MODIFY `creation_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `orders` MODIFY `order_date` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `users` DROP COLUMN `address`;
