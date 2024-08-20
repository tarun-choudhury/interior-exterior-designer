import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import useDeleteItemsState from '@/global/delete-items-state'

const useDelItems = () => {
  const [loading, setLoading] = useState(false)
  const { globalItems, setGlobalItems }: any = useDeleteItemsState()

  const delItems = async ({
    itemIds,
    publicIds,
    setItemIds,
    setPublicIds
  }: any) => {
    setLoading(true)
    try {
      const jsonObject = { itemIds, publicIds }
      const response = await axios.post('/api/items/del-items', jsonObject)
      if (response.data.error) throw new Error(response.data.error)
      if (response.data.success !== true) throw new Error(response.data.message)
      toast.success('Items deleted successfully')
      await setGlobalItems(
        globalItems.filter((item: any) => !itemIds.includes(item._id))
      )
      setItemIds([])
      setPublicIds([])
    } catch (error: any) {
      toast.error('delete items failed:', error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, delItems }
}

export default useDelItems
