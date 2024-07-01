import { Readable } from "stream"
import readLine from "readline"

import { Router, Request, Response } from "express"
import multer from "multer"


const multerConfig = multer()
const router = Router()

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

  for await(let line of productsLine) {
    // console.log(line)
    line.split(",")
  }

  
  
  return response.send().status(200)
})

export { router }