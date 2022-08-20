import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	// set wherever it is orderNum to -1
	// set wherever it is orderNum-1 to orderNum
	// set wherever it is -1 to orderNum-1

	const videoItemData = JSON.parse(req.body);
	console.log("videoItemData", videoItemData)

	const currentVideoItem = await prisma.videoItem.findUnique({
		where : {
			id: videoItemData.id
		}
	})

	// @ts-ignore
	const currentOrderNum = currentVideoItem.orderNum


	const topVideoItem = await prisma.videoItem.findUnique({
		where : {
			orderNum: currentOrderNum-1
		}
	})

	// if we the currentItem is the top most item, then we can't move the item above
	if (topVideoItem == null) {
		return res.status(405).json({message: "Method not allowed"})
	}

	await prisma.videoItem.update({
		where : {
			// @ts-ignore
			orderNum: currentOrderNum
		},
		data: {
			// @ts-ignore
			orderNum: -1
		}
	})

	await prisma.videoItem.update({
		where : {
			// @ts-ignore
			orderNum: currentOrderNum-1
		},
		data: {
			// @ts-ignore
			orderNum: currentOrderNum
		}
	})

	const savedVideoItem = await prisma.videoItem.update({
		where : {
			// @ts-ignore
			orderNum: -1
		},
		data: {
			// @ts-ignore
			orderNum: currentOrderNum-1
		}
	})

	

	res.json(savedVideoItem);
}