import cloudinary from '@/lib/cloudinary'

interface Input {
  file: File
  folder: string
}

const uploadImg = async ({ file, folder }: Input) => {
  const buffer = await file.arrayBuffer()
  const bytes = Buffer.from(buffer)

  const response = new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          folder
          // public_id: file.name
        },
        (error, result) => {
          if (error) {
            return reject("Getting Rejected")
          }
          return resolve(result)
        }
      )
      .end(bytes)
  })
  return response
}

export default uploadImg
