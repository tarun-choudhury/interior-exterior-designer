import axios from 'axios'
import { useEffect, useState } from 'react'

const useGetAllItems = ( setItems: any ) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get(`/api/items/get-items`)

        if (response.data.error) throw new Error(response.data.error)
        if (response.data.success !== true)
          throw new Error(response.data.message)
        setItems(response.data.items)
      } catch (error: any) {
        console.error('Items fetch failed', error.message)
      } finally {
        setLoading(false)
      }
    }
    getItems()
  }, [])

  return { loading }
}

export default useGetAllItems
