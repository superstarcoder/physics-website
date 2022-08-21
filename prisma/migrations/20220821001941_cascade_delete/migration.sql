-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Chapter" DROP CONSTRAINT "Chapter_pageId_fkey";

-- DropForeignKey
ALTER TABLE "MiniCard" DROP CONSTRAINT "MiniCard_pageId_fkey";

-- DropForeignKey
ALTER TABLE "SubChapter" DROP CONSTRAINT "SubChapter_chapterId_fkey";

-- DropForeignKey
ALTER TABLE "VideoItem" DROP CONSTRAINT "VideoItem_subChapterId_fkey";

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MiniCard" ADD CONSTRAINT "MiniCard_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Chapter" ADD CONSTRAINT "Chapter_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubChapter" ADD CONSTRAINT "SubChapter_chapterId_fkey" FOREIGN KEY ("chapterId") REFERENCES "Chapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoItem" ADD CONSTRAINT "VideoItem_subChapterId_fkey" FOREIGN KEY ("subChapterId") REFERENCES "SubChapter"("id") ON DELETE CASCADE ON UPDATE CASCADE;
