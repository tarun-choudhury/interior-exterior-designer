import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import toast from 'react-hot-toast'
import Cookies from "js-cookie"

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
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return { loading, logout }
}

export default useLogout
