/*
  Warnings:

  - A unique constraint covering the columns `[orderNum]` on the table `VideoItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "VideoItem_orderNum_key" ON "VideoItem"("orderNum");
