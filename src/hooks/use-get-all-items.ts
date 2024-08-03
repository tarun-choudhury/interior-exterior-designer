import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetAllItems = () => {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState([])

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)

      try {
        const response = await axios.get(`/api/items/get-items`)

        if (response.data.error) throw new Error(response.data.error)
        if (response.data.success !== true)
          throw new Error(response.data.message)

        console.log('Items fetched', response.data.items)
        setItems(response.data.items)
      } catch (error: any) {
        console.error('Items fetch failed', error.message)
      } finally {
        setLoading(false)
      }
    }
    getItems()
  }, [])

  return { loading, items }
}

export default useGetAllItems
