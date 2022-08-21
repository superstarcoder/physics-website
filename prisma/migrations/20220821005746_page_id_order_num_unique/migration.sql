/*
  Warnings:

  - A unique constraint covering the columns `[pageId,orderNum]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pageId,orderNum]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[pageId,orderNum]` on the table `MiniCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[chapterId,orderNum]` on the table `SubChapter` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[subChapterId,orderNum]` on the table `VideoItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Card_pageId_orderNum_key" ON "Card"("pageId", "orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_pageId_orderNum_key" ON "Chapter"("pageId", "orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "MiniCard_pageId_orderNum_key" ON "MiniCard"("pageId", "orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "SubChapter_chapterId_orderNum_key" ON "SubChapter"("chapterId", "orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "VideoItem_subChapterId_orderNum_key" ON "VideoItem"("subChapterId", "orderNum");
