import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const useDelItems = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const delItems = async ({
    itemIds,
    publicIds,
    setItemIds,
    setPublicIds,
    items,
    setItems
  }: any) => {
    setLoading(true)
    try {
      const jsonObject = { itemIds, publicIds }
      const response = await axios.post('/api/items/del-items', jsonObject)
      if (response.data.error) throw new Error(response.data.error)
      if (response.data.success !== true) throw new Error(response.data.message)
      toast.success('Items deleted successfully')

      setItems(items.filter((item: any) => !itemIds.includes(item._id)))
      setItemIds([])
      setPublicIds([])
      router.refresh()
    } catch (error: any) {
      toast.error('delete items failed:', error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, delItems }
}

export default useDelItems
