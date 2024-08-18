import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const useAddItem = () => {
  const [loading, setLoading] = useState(false)

  const addItem = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/items/add-item', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (response.data.error) throw new Error(response.data.error)
      if (response.data.success !== true) throw new Error(response.data.message)
      toast.success('Item added successfully')
    } catch (error: any) {
      console.error('Item addition failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, addItem }
}

export default useAddItem