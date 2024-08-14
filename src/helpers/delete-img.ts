import cloudinary from '@/lib/cloudinary'

const deleteImg = async (public_id: string) => {
  // TODO: remove async await
  const response = new Promise(async (resolve, reject) => {
    try {
      const result = await cloudinary.uploader.destroy(public_id)
      return resolve(result)
    } catch (error: any) {
      reject(new Error(error.message))
    }
  })
  return response
}

export default deleteImg
