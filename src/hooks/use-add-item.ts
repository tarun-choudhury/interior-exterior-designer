import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

interface AddItemData {
  title: string
  price: number
  desc: string
  category: string
}

const useAddItem = () => {
  const [loading, setLoading] = useState(false)

  const addItem = async (data: AddItemData) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/product/add-item', data)
      if (response.data.error) throw new Error(response.data.error)
      if (response.data.success !== true) throw new Error(response.data.message)
      console.log('Item added successfully', response.data)
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
