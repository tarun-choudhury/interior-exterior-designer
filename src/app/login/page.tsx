'use client'
import { ChangeEvent, FormEvent, useState } from 'react'

import Button from '@/common/button'
import useLogin from '@/hooks/use-login'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { loading, login } = useLogin()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email, password)
    await login({ email, password })
  }

  return (
    <div className="flex flex-col gap-10 bg-60-light p-20 pb-32">
      <h1 className="text-center text-3xl text-primary-light">Admin Login</h1>
      <form
        className="mx-auto w-[26rem] max-w-7xl space-y-4 bg-white p-10 shadow-lg outline outline-1 outline-primary"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1">
          <label className="text-sm text-primary-light">Your Email</label>
          <input
            required
            className="form-input rounded-none border-primary-light"
            placeholder="Enter title here"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-primary-light">Your Password</label>
          <input
            required
            className="form-input rounded-none border-primary-light font-serif"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="flex justify-center pb-1 pt-6">
          <Button loading={loading} text="Login" type="submit" width={12} />
        </div>
      </form>
    </div>
  )
}

export default Login
