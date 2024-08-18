import cloudinary from '@/lib/cloudinary'

const deleteImg = async (public_id: string) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id)
    return result
  } catch (error: any) {
    throw new Error('Image deletion failed')
  }
}

export default deleteImg
