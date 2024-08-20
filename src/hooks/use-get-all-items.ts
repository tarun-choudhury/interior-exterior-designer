import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

import useDeleteItemsState from '@/global/delete-items-state'

const useGetAllItems = () => {
  const [loading, setLoading] = useState(true)
  const { globalItems, setGlobalItems }: any = useDeleteItemsState()

  useEffect(() => {
    const getItems = async () => {
      setLoading(true)
      try {
        const response = await axios.get(`/api/items/get-items`)

        if (response.data.error) throw new Error(response.data.error)
        if (response.data.success !== true)
          throw new Error(response.data.message)
        console.log('All Items Fetched:', response.data.items)
        setGlobalItems(response.data.items)
        console.log('Global Items after Fetch:', globalItems)
      } catch (error: any) {
        toast.error('Items fetch failed:', error.message)
      } finally {
        setLoading(false)
      }
    }
    getItems()
    // console.log('useGetAllItems', globalItems)
  }, [setGlobalItems])
  return loading
}

export default useGetAllItems

/*
import axios from 'axios'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

const useGetAllItems = (setItems: any) => {
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
        toast.error('Items fetch failed:', error.message)
      } finally {
        setLoading(false)
      }
    }
    getItems()
  }, [setItems])

  return { loading }
}

export default useGetAllItems

*/
