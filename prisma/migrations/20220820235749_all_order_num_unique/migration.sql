/*
  Warnings:

  - A unique constraint covering the columns `[orderNum]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderNum]` on the table `Chapter` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderNum]` on the table `MiniCard` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[orderNum]` on the table `SubChapter` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Card_orderNum_key" ON "Card"("orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "Chapter_orderNum_key" ON "Chapter"("orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "MiniCard_orderNum_key" ON "MiniCard"("orderNum");

-- CreateIndex
CREATE UNIQUE INDEX "SubChapter_orderNum_key" ON "SubChapter"("orderNum");
