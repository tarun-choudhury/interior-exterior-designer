import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

import useAdminState from '@/context/admin-zustand'

const useLogout = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const {adminLogout}: any = useAdminState()

  const logout = async () => {
    setLoading(true)
    try {
      await axios.get('/api/auth/logout')
      console.log('Logout successful')
      adminLogout()
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      console.error('Login failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, logout }
}

export default useLogout
