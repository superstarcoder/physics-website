import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import formidable from 'formidable'
import { promises as fs } from 'fs'



import { prisma } from "../../../db";
// const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" })
	}


	// const data = await new Promise((resolve, reject) => {
	// // @ts-ignore
	//   const form = new formidable.IncomingForm()

	// // @ts-ignore
	//   form.parse(req, (err, fields, files) => {
	//     if (err) reject({ err })
	//     resolve({ err, fields, files })
	//   }) 
	// })




	// console.log(req.body)

	console.log("going to parse")
	const dataPassed = JSON.parse(req.body);
	// console.log("DATA PASSED:")
	// console.log(dataPassed.imageFile)
	// var reader = new FileReader();
	// // @ts-ignore
	// console.log(reader.readAsBinaryString(data.files.fileData));




	// move everything down
	await prisma.card.updateMany({
		where: {
			pageId: dataPassed.pageId,
			orderNum: {
				gte: dataPassed.orderNum
			}
		},
		data: {
			orderNum: {
				increment: 1
			}
		}
	})

	// console.log(dataPassed.imageFile)
	var base64ImageString = Buffer.from(dataPassed.imageFile, 'binary').toString('base64')
	// console.log(base64ImageString)
	// const imageFile = dataPassed.imageFile.replace(/\u0000/g, "")


	const savedVideoItem = await prisma.card.create({
		data: {
			title: dataPassed.title,
			orderNum: dataPassed.orderNum,
			relPath: dataPassed.relPath,
			imagePath: dataPassed.imagePath,
			imageFile: base64ImageString,
			page: {
				connect: {
					id: dataPassed.pageId
				}
			}
		}
	})

	res.json(savedVideoItem);
	// res.json({});
}