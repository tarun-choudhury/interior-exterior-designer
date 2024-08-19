import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetItemsByCat = (id: any) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`/api/items/get-items/${id}`)
        if (response.data.error) throw new Error(response.data.error)
        if (response.data.success !== true)
          throw new Error(response.data.message)
        setItems(response.data.items)
      } catch (error: any) {
        toast.error('Items fetch failed:', error.message)
      } finally {
        setLoading(false)
      }
    }
    getItems()
  }, [id])

  return { loading, items }
}

export default useGetItemsByCat
