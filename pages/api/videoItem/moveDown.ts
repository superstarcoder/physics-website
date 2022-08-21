import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	// set wherever it is orderNum to -1
	// set wherever it is orderNum+1 to orderNum
	// set wherever it is -1 to orderNum+1

	const dataPassed = JSON.parse(req.body);
	console.log("videoItemData", dataPassed)

	const currentVideoItem = await prisma.videoItem.findUnique({
		where : {
			id: dataPassed.id
		}
	})

	// @ts-ignore
	const currentOrderNum = currentVideoItem.orderNum


	const topVideoItem = await prisma.videoItem.findFirst({
		where : {
			orderNum: currentOrderNum+1,
			subChapterId: dataPassed.subChapterId
		}
	})

	// if we the currentItem is the bottom most item, then we can't move the item below
	if (topVideoItem == null) {
		return res.status(405).json({message: "Method not allowed"})
	}

	await prisma.videoItem.updateMany({
		where : {
			// @ts-ignore
			orderNum: currentOrderNum,
			subChapterId: dataPassed.subChapterId
		},
		data: {
			// @ts-ignore
			orderNum: -1
		}
	})

	await prisma.videoItem.updateMany({
		where : {
			// @ts-ignore
			orderNum: currentOrderNum+1,
			subChapterId: dataPassed.subChapterId
		},
		data: {
			// @ts-ignore
			orderNum: currentOrderNum
		}
	})

	const savedVideoItem = await prisma.videoItem.updateMany({
		where : {
			// @ts-ignore
			orderNum: -1,
			subChapterId: dataPassed.subChapterId
		},
		data: {
			// @ts-ignore
			orderNum: currentOrderNum+1
		}
	})

	

	res.json(savedVideoItem);
}