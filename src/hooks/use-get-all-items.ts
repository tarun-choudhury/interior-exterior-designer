import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import useDeleteItemsState from '@/global/delete-items-state'

const useGetAllItems = () => {
  const [loading, setLoading] = useState(true)
  const { setGlobalItems }: any = useDeleteItemsState()

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`/api/items/get-items`)

        if (response.data.error) throw new Error(response.data.error)
        if (response.data.success !== true)
          throw new Error(response.data.message)
        const data = response.data.items
        await setGlobalItems(data)
      } catch (error: any) {
        toast.error('Items fetch failed:', error.message)
      } finally {
        setLoading(false)
      }
    }
    getItems()
  }, [setGlobalItems])
  return { loading }
}

export default useGetAllItems
