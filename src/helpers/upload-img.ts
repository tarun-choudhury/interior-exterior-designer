import cloudinary from '@/lib/cloudinary'

interface Input {
  file: File
  folder: string
}

const uploadImg = async ({ file, folder }: Input) => {
  const buffer = await file.arrayBuffer()
  const bytes = Buffer.from(buffer)

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto',
        folder,
        // public_id: file.name
      },
      (error, result) => {
        if (error) {
          return reject(new Error(error.message))
        }
        resolve(result)
      }
    )

    uploadStream.end(bytes)
  })
}

export default uploadImg
