-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "orderNum" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "Chapter" ADD COLUMN     "orderNum" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "MiniCard" ADD COLUMN     "orderNum" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "SubChapter" ADD COLUMN     "orderNum" SERIAL NOT NULL;

-- AlterTable
ALTER TABLE "VideoItem" ADD COLUMN     "orderNum" SERIAL NOT NULL;
