import { Readable } from "stream"
import readLine from "readline"

import { Router, Request, Response } from "express"
import multer from "multer"

import { client } from "./database/client"


const multerConfig = multer()
const router = Router()

interface Product {
  descricao: string
  estoque: number
}

router.post("/products", 
  multerConfig.single("file"),
 async (request:Request, response:Response) => {
  // console.log(request.file)
  // console.log(request.file?.buffer.toString("utf8"))
  const { file } = request
  const { buffer }:any = file

  const readableFile = new Readable()
  readableFile.push(buffer)
  readableFile.push(null)

  // console.log(readableFile)

  const productsLine = readLine.createInterface({
    input: readableFile
  })

  const products: Product[] = []

  for await(let line of productsLine) {
    // console.log(line)
    const producLineSplit = line.split(",")
    // console.log(producLineSplit)
    products.push({
      descricao: producLineSplit[0],
      estoque: Number(producLineSplit[1])
    })
  }

  // console.log(products)
  products.shift()
  for await (let {
    descricao, 
    estoque
  } of products) {
    await client.products.create({
      data: {
        descricao,
        estoque
      }
    })
  }

  
  
  return response.send('<h1>Olá</h1>').status(200)
})

export { router }