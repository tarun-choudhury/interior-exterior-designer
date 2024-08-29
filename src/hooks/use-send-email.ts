import axios from 'axios'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

const useSendEmail = () => {
  const [loading, setLoading] = useState(false)

  const sendEmail = async ({ from, subject, message }: any) => {
    const { title, image_url, price, desc } = message
    setLoading(true)
    try {
      console.log('inside send email')
      console.log('from:', from)
      console.log('subject:', subject)
      console.log('title:', title)
      console.log('image_url:', image_url)
      console.log('price:', price)
      console.log('desc:', desc)
      const response = await axios.post('/api/email', {
        from,
        subject,
        title,
        image_url,
        price,
        desc
      })
      if (response.data.error) throw new Error(response.data.error)
      if (response.data.success !== true) throw new Error(response.data.message)
      toast.success(response.data.message)
    } catch (error: any) {
      toast.error('Email failed:', error.message)
    } finally {
      setLoading(false)
    }
  }
  return { loading, sendEmail }
}

export default useSendEmail
