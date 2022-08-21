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

	const savedVideoItem = await prisma.videoItem.create({
		data: {
			title: dataPassed.title,
			link: dataPassed.link,
			subChapter: {
				connect: {
					id: dataPassed.subChapterId
				}
			}
		}
	})

	res.json(savedVideoItem);
}