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

	const savedVideoItem = await prisma.videoItem.delete({
		where: {
			id: dataPassed.id
		}
	})
	var orderNum = savedVideoItem.orderNum

	await prisma.videoItem.updateMany({
		where: {
			orderNum: {
				gt: orderNum
			}
		},
		data : {
			orderNum: {
				decrement: 1
			}
		}
	})

	res.json(savedVideoItem);
}