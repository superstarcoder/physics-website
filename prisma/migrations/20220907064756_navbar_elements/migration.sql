-- CreateTable
CREATE TABLE "NavItem" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "pageId" TEXT NOT NULL,
    "navItemId" TEXT,

    CONSTRAINT "NavItem_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NavItem" ADD CONSTRAINT "NavItem_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavItem" ADD CONSTRAINT "NavItem_navItemId_fkey" FOREIGN KEY ("navItemId") REFERENCES "NavItem"("id") ON DELETE SET NULL ON UPDATE CASCADE;
