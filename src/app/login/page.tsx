'use client'
import { ChangeEvent, FormEvent, useState } from 'react'

import Button from '@/common/button'
import useLogin from '@/hooks/use-login'

const Login = () => {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const { loading, login } = useLogin()

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await login({ email, password })
  }

  return (
    <div className="flex flex-col gap-10 bg-60-light p-20 pb-32">
      <h1 className="text-center text-3xl text-30-light">Admin Login</h1>
      <form
        className="mx-auto w-[26rem] max-w-7xl space-y-4 bg-white p-10 shadow-lg outline outline-1 outline-30"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1">
          <label className="text-sm text-30-light">Your Email</label>
          <input
            required
            className="form-input rounded-none border-30-light font-serif placeholder:font-sans"
            placeholder="Enter title here"
            type="email"
            value={email}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm text-30-light">Your Password</label>
          <input
            required
            className="form-input rounded-none border-30-light font-serif"
            placeholder="••••••••"
            type="password"
            value={password}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        <div className="flex justify-center pb-1 pt-6">
          <Button
            loading={loading}
            onclick={() => {}}
            text="Login"
            type="submit"
            width={12}
          />
        </div>
      </form>
    </div>
  )
}

export default Login
