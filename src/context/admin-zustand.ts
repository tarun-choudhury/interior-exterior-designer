import { create } from 'zustand'

const useAdminState = create((set) => ({
  admin: false,
  adminLogin: () => set({ admin: true }),
  adminLogout: () => set({ admin: false })
}))
export default useAdminState
