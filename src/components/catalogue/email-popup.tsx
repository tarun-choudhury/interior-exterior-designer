import { ChangeEvent } from 'react'

import XClose from '@/assets/svg/x-close'
import Button from '@/common/button'

interface EmailPopupProps {
  popup: boolean
  setPopup: (value: boolean) => void
  email: string
  setEmail: (value: string) => void
  userEmail: string
  handleClick: () => void
}

const EmailPopup = ({
  popup,
  setPopup,
  email,
  setEmail,
  userEmail,
  handleClick
}: EmailPopupProps) => {
  return (
    <>
      {popup && userEmail === '' && (
        <div className="fixed left-1/2 top-1/3 z-20 w-[calc(100vw-2rem)] max-w-7xl -translate-x-1/2 -translate-y-1/3 space-y-2 bg-white p-4 shadow-lg outline outline-1 outline-30 sm:w-[30rem]">
          <button
            className="ml-auto block w-fit transition-all hover:scale-105"
            onClick={() => setPopup(false)}
          >
            <XClose stroke="stroke-30" />
          </button>
          <div className="space-y-4 p-6 pt-0">
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
        </div>
      )}
      {popup && userEmail !== '' && (
        <div className="fixed left-1/2 top-1/3 z-20 w-[calc(100vw-2rem)] max-w-7xl -translate-x-1/2 -translate-y-1/3 space-y-4 bg-white p-4 shadow-lg outline outline-1 outline-30 sm:w-80">
          <button
            className="ml-auto block w-fit transition-all hover:scale-105"
            onClick={() => setPopup(false)}
          >
            <XClose />
          </button>
          <div className="space-y-4 p-6 pt-0">
            <h1 className="text-center text-xl">Confirm Order?</h1>
            <div className="flex justify-center py-1">
              <Button
                loading={false}
                onclick={handleClick}
                text="Confirm"
                type="submit"
                width={12}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EmailPopup
