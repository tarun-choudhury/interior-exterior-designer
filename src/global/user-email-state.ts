// create a zustand store for user email

import { create } from 'zustand'

interface UserEmailState {
  email: string
  setEmail: (email: string) => void
}

const useUserEmailState = create((set) => ({
  email: '',
  setEmail: (email: UserEmailState) => set({ email })
}))

export default useUserEmailState
