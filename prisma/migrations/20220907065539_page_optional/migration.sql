-- DropForeignKey
ALTER TABLE "NavItem" DROP CONSTRAINT "NavItem_pageId_fkey";

-- AlterTable
ALTER TABLE "NavItem" ALTER COLUMN "pageId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "NavItem" ADD CONSTRAINT "NavItem_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE SET NULL ON UPDATE CASCADE;
