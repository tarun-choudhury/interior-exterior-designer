import cloudinary from '@/lib/cloudinary'

interface Input {
  file: File
  folder: string
}

const uploadImg = async ({ file, folder }: Input) => {
  const buffer = await file.arrayBuffer()
  const bytes = Buffer.from(buffer)

  const response = await new Promise((resolve) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          folder
          // public_id: file.name
        },
        (error, result) => {
          console.log("inside uploader")
          if (error) {
            console.error("while uploading error: ", error)
          }
          return resolve(result)
        }
      )
      .end(bytes)
  })
  return response
}

export default uploadImg
