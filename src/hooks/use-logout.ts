import axios from 'axios'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'

const useLogout = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const logout = async () => {
    setLoading(true)
    try {
      await axios.get('/api/auth/logout')
      Cookies.remove('token')
      toast.success('Logout successful')
      router.push('/login')
    } catch (error: any) {
      toast.error('Logout failed:', error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, logout }
}

export default useLogout
