import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const useLogin = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const login = async (data: { email: string; password: string }) => {
    setLoading(true)
    try {
      const response = await axios.post('/api/auth/login', data)
      if (response.data.error) throw new Error(response.data.error)
      if (response.data.success !== true) throw new Error(response.data.message)
      console.log('Login successful', response.data)
      toast.success('Login successful')
      router.push('/create-items')
    } catch (error: any) {
      console.error('Login failed', error.message)
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, login }
}

export default useLogin
