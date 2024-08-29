'use client'
import { useRouter } from 'next/navigation'
import { ChangeEvent, useState } from 'react'

import Button from '@/common/button'
import useUserEmailState from '@/global/user-email-state'

const Tage = () => {
  const router = useRouter()
  const [popup, setPopup] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const { email: userEmail, setEmail: setUserEmail }: any = useUserEmailState()

  const handleClick = () => {
    setUserEmail(email)
    setPopup(false)
  }

  return (
    <div className="relative h-[calc(100vh-4rem)]">
      {popup && <div className="absolute -top-16 z-10 h-screen w-full bg-60-dark/30"></div>}
      <button
        className="btn btn-light-primary"
        onClick={() => {
          console.log('userEmail', userEmail)
          if(userEmail === '') setPopup(true)
          else router.push('/test')
        }}
      >
        Click Me
      </button>

      {popup && userEmail === '' ? (
        <div className="absolute left-1/2 top-1/3 z-20 w-[26rem] max-w-7xl -translate-x-1/2 -translate-y-1/3 space-y-4 bg-white p-10 shadow-lg outline outline-1 outline-30">
          <div className="space-y-1">
            <label className="text-sm text-30-light">Your Email</label>
            <input
              required
              className="form-input rounded-none border-30-light font-serif placeholder:font-sans"
              placeholder="Enter your email here"
              type="email"
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </div>
          <div className="flex justify-center py-1">
            <Button
              loading={false}
              onclick={handleClick}
              text="Place Order"
              type="submit"
              width={12}
            />
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Tage
