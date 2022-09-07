import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../db";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default async (req:NextApiRequest, res:NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({message: "Method not allowed"})
	}

	const dataPassed = JSON.parse(req.body);
	console.log("videoItemData", dataPassed)

	const savedVideoItem = await prisma.card.update({
		where : {
			id: dataPassed.id
		},
		data: {
			title: dataPassed.title,
			relPath: dataPassed.relPath,
		}
	})

	if (dataPassed.imageFile != "") {
		var base64ImageString = Buffer.from(dataPassed.imageFile, 'binary').toString('base64')
		const savedVideoItem = await prisma.card.update({
			where : {
				id: dataPassed.id
			},
			data: {
				imageFile: base64ImageString,
			}
		})
	}

	res.json(savedVideoItem);
}