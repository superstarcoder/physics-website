import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	const dataPassed = JSON.parse(req.body);
	console.log(dataPassed)


	// move everything down
	await prisma.chapter.updateMany({
		where: {
			pageId: dataPassed.pageId,
			orderNum: {
				gte: dataPassed.orderNum,
			}
		},
		data : {
			orderNum: {
				increment: 1
			}
		},
	})

	const savedVideoItem = await prisma.chapter.create({
		data: {
			title: dataPassed.title,
			orderNum: dataPassed.orderNum,
			id: dataPassed.id,
			page : {
				connect: {
					id: dataPassed.pageId
				}
			}
		}
	})

	return res.json({"id": savedVideoItem.id});
}