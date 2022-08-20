import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	const videoItemData = JSON.parse(req.body);
	console.log("videoItemData", videoItemData)

	const savedVideoItem = await prisma.videoItem.update({
		where : {
			id: videoItemData.id
		},
		data: {
			title: videoItemData.title,
			link: videoItemData.link
		}
	})

	res.json(savedVideoItem);
}