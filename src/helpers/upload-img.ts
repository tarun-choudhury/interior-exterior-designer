import cloudinary from '@/lib/cloudinary'

interface Input {
  file: File
  folder: string
}

const uploadImg = async ({ file, folder }: Input) => {
  const buffer = await file.arrayBuffer()
  const bytes = Buffer.from(buffer)

  const response = new Promise(async (resolve, reject) => {
    await cloudinary.uploader
      .upload_stream(
        {
          resource_type: 'auto',
          folder
          // public_id: file.name
        },
        (error, result) => {
          if (error) {
            reject(error.message)
          }
          return resolve(result)
        }
      )
      .end(bytes)
  })
  return response
}

export default uploadImg
