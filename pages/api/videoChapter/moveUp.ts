import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	// set wherever it is orderNum to -1
	// set wherever it is orderNum-1 to orderNum
	// set wherever it is -1 to orderNum-1

	const dataPassed = JSON.parse(req.body);
	console.log("videoItemData", dataPassed)

	const currentVideoItem = await prisma.chapter.findUnique({
		where : {
			id: dataPassed.id
		}
	})

	// @ts-ignore
	const currentOrderNum = currentVideoItem.orderNum


	const topVideoItem = await prisma.chapter.findFirst({
		where : {
			orderNum: currentOrderNum-1,
			pageId: dataPassed.pageId
		}
	})

	// if we the currentItem is the top most item, then we can't move the item above
	if (topVideoItem == null) {
		return res.status(405).json({message: "Method not allowed"})
	}

	await prisma.chapter.updateMany({
		where : {
			// @ts-ignore
			orderNum: currentOrderNum,
			pageId: dataPassed.pageId
		},
		data: {
			// @ts-ignore
			orderNum: -1
		}
	})

	await prisma.chapter.updateMany({
		where : {
			// @ts-ignore
			orderNum: currentOrderNum-1,
			pageId: dataPassed.pageId

		},
		data: {
			// @ts-ignore
			orderNum: currentOrderNum
		}
	})

	const savedVideoItem = await prisma.chapter.updateMany({
		where : {
			// @ts-ignore
			orderNum: -1,
			pageId: dataPassed.pageId

		},
		data: {
			// @ts-ignore
			orderNum: currentOrderNum-1
		}
	})

	

	res.json(savedVideoItem);
}