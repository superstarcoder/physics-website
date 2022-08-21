-- AlterTable
ALTER TABLE "Card" ALTER COLUMN "orderNum" DROP DEFAULT;
DROP SEQUENCE "Card_orderNum_seq";

-- AlterTable
ALTER TABLE "Chapter" ALTER COLUMN "orderNum" DROP DEFAULT;
DROP SEQUENCE "Chapter_orderNum_seq";

-- AlterTable
ALTER TABLE "MiniCard" ALTER COLUMN "orderNum" DROP DEFAULT;
DROP SEQUENCE "MiniCard_orderNum_seq";

-- AlterTable
ALTER TABLE "SubChapter" ALTER COLUMN "orderNum" DROP DEFAULT;
DROP SEQUENCE "SubChapter_orderNum_seq";

-- AlterTable
ALTER TABLE "VideoItem" ALTER COLUMN "orderNum" DROP DEFAULT;
DROP SEQUENCE "VideoItem_orderNum_seq";
