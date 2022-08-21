import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../db";
// const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	const dataPassed = JSON.parse(req.body);
	console.log(dataPassed)


	// move everything down
	await prisma.videoItem.updateMany({
		where: {
			subChapterId: dataPassed.subChapterId,
			orderNum: {
				gte: dataPassed.orderNum
			}
		},
		data : {
			orderNum: {
				increment: 1
			}
		}
	})

	// const lastVideoItem = await prisma.videoItem.findMany({
	// 	where: {
	// 		subChapterId: dataPassed.subChapterId,
	// 	},
	// 	orderBy: {
	// 		orderNum: "desc"
	// 	},
	// 	take: 1
	// })

	// if (lastVideoItem.length == 0) {
	// 	var lastOrderNum = 0
	// }
	// else {
	// 	var lastOrderNum = lastVideoItem[0].orderNum
	// }

	const savedVideoItem = await prisma.videoItem.create({
		data: {
			title: dataPassed.title,
			link: dataPassed.link,
			orderNum: dataPassed.orderNum,
			subChapter: {
				connect: {
					id: dataPassed.subChapterId
				}
			}
		}
	})

	res.json(savedVideoItem);
}